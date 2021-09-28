import React, { useCallback, useState } from "react";

import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import { AVATAR_FALLBACK_IMG } from "@constant/index";
import {
  useChangeRoleMutation,
  useGetUsersQuery,
  UserFragment,
  UserRole,
} from "@generated/graphql";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, MailIcon, SelectorIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import { capitalize, toConsantFormat } from "@utils/stringFormatter";
import withApollo from "@utils/withApollo";
import { debounce } from "lodash";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const PersonItemSkeleton: React.FC = () => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <Skeleton circle={true} height={40} width={40} />
          </div>
          <Skeleton />
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        <Skeleton />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <Skeleton />
      </td>
    </tr>
  );
};

type IRoles = { name: string; value: UserRole }[];

interface PersonItemProps {
  person: UserFragment;
}

const roles: IRoles = [
  { name: capitalize(UserRole.SuperAdmin, "_"), value: UserRole.SuperAdmin },
  { name: capitalize(UserRole.Admin, "_"), value: UserRole.Admin },
  { name: capitalize(UserRole.User, "_"), value: UserRole.User },
];

const PersonItem: React.FC<PersonItemProps> = ({ person }) => {
  const [editMode, setEditMode] = useState(false);
  const [selected, setSelected] = useState(capitalize(person.role, "_"));

  const [changeRole] = useChangeRoleMutation();

  const saveChanges = async () => {
    try {
      await changeRole({
        variables: {
          changeRoleInput: {
            userId: person.id,
            newRole: toConsantFormat(selected) as UserRole,
          },
        },
        update: (_, { data }) => {
          if (data?.changeRole) {
            setEditMode(false);
          }
        },
      });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <li className="!list-none" key={person.id}>
      <div className="flex items-center px-4 py-4 sm:px-6">
        <div className="min-w-0 flex-1 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={person.avatar ?? AVATAR_FALLBACK_IMG}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1 items-center px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <p className="text-sm font-medium text-indigo-600 truncate">
                {person.firstName + person.lastName}
              </p>
              <p className="mt-2 flex items-center text-sm text-gray-500">
                <MailIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="truncate">{person.email}</span>
              </p>
            </div>
            <div className="hidden md:block">
              {editMode ? (
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative inline-block w-44">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <span className="block truncate">{selected}</span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Listbox.Options
                            static
                            className="absolute z-10 w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            {roles.map((role) => (
                              <Listbox.Option
                                key={role.name}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-indigo-600"
                                      : "text-gray-900",
                                    "cursor-default select-none relative py-2 pl-3 pr-9"
                                  )
                                }
                                value={role.name}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {role.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "text-white"
                                            : "text-indigo-600",
                                          "absolute inset-y-0 right-0 flex items-center pr-4"
                                        )}
                                      >
                                        <CheckIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              ) : (
                <p className="text-sm text-gray-800">
                  {capitalize(person.role, "_")}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          {editMode && (
            <button
              onClick={() => setEditMode(false)}
              className="text-sm text-gray-800"
            >
              Cancel
            </button>
          )}
          <button
            onClick={() => {
              if (editMode) {
                saveChanges();
              } else {
                setEditMode(true);
              }
            }}
            className="text-sm text-indigo-600 hover:text-indigo-900"
          >
            {editMode ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </li>
  );
};

interface ChangeRolesProps {}

const ChangeRoles: React.FC<ChangeRolesProps> = () => {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback(
    debounce((text) => {
      setSearch(text);
    }, 500),
    []
  );

  const { data, loading, variables, fetchMore } = useGetUsersQuery({
    variables: {
      usersInput: {
        limit: 20,
        cursor: null,
        search,
      },
    },
  });

  const users = data?.users.users || [];
  const pageInfo = data?.users.pageInfo;

  return (
    <Layout title="Home">
      <NestedLayout showSearchBar={false}>
        <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
          <input
            className="block mb-4 border-gray-300 rounded-md shadow-sm w-80 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search user"
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
          />
          <div className="max-w-3xl">
            <div className="bg-white shadow sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {users.map((person) => (
                  <PersonItem key={person.id} person={person} />
                ))}
                {!users.length && loading && (
                  <>
                    {[...Array(3).keys()].map((idx) => (
                      <PersonItemSkeleton key={idx} />
                    ))}
                  </>
                )}
                {users.length > 0 && loading && (
                  <>
                    {[...Array(3).keys()].map((idx) => (
                      <PersonItemSkeleton key={idx} />
                    ))}
                  </>
                )}
              </ul>
              {pageInfo?.hasNextPage && (
                <button
                  type="button"
                  className="flex px-4 py-2 mx-auto my-2 text-base font-medium leading-4 rounded-md active:bg-gray-50 focus:outline-none"
                  onClick={() => {
                    fetchMore({
                      variables: {
                        usersInput: {
                          ...variables?.usersInput,
                          cursor: pageInfo.endCursor,
                        },
                      },
                    });
                  }}
                >
                  {loading ? "Loading.." : "Load more"}
                </button>
              )}
            </div>

            {!users.length && !loading && (
              <div className="flex flex-col items-center justify-center h-64 max-w-3xl p-10 mt-10 text-center md:h-80 lg:h-96">
                <div className="relative w-full h-full">
                  <Image src="/empty.svg" layout="fill" />
                </div>
                <p className="mt-4 lg:mt-12">No members found.</p>
              </div>
            )}
          </div>
        </div>
      </NestedLayout>
    </Layout>
  );
};

export default withApollo({ ssr: true })(ChangeRoles);
