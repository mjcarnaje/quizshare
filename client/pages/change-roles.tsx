import React, { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { classNames } from "@utils/index";
import withApollo from "@utils/withApollo";
import { AVATAR_FALLBACK_IMG } from "constant";

import Container from "../components/ui/Container";
import MainContainer from "../components/ui/MainContainer";
import {
  useChangeRoleMutation,
  useGetUsersQuery,
  UserFragment,
  UserRole,
} from "../generated/graphql";
import { capitalize } from "../utils/capitalize";

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

  const [changeRole, { loading }] = useChangeRoleMutation();

  const saveChanges = async () => {
    try {
      await changeRole({
        variables: {
          changeRoleInput: {
            userId: person.id,
            newRole: selected
              .split(" ")
              .map((word) => word.toUpperCase())
              .join("_") as UserRole,
          },
        },
      });

      setEditMode(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <tr key={person.email}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={person.avatar ?? AVATAR_FALLBACK_IMG}
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {person.firstName + person.lastName}
            </div>
            <div className="text-sm text-gray-500">{person.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {editMode ? (
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-1">
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
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options
                      static
                      className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {role.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
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
          capitalize(person.role, "_")
        )}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={() => {
            if (editMode) {
              saveChanges();
            } else {
              setEditMode(true);
            }
          }}
          className="text-indigo-600 hover:text-indigo-900"
        >
          {editMode ? (loading ? "Loading..." : "Save") : "Edit"}
        </button>
      </td>
    </tr>
  );
};

interface ChangeRolesProps {}

const ChangeRoles: React.FC<ChangeRolesProps> = () => {
  const [search, setSearch] = useState("");

  const { data } = useGetUsersQuery({
    variables: {
      usersInput: {
        limit: 20,
        cursor: null,
        search,
      },
    },
  });

  return (
    <MainContainer title="Home">
      <Container>
        <main className="relative flex-1 overflow-y-auto">
          <div className="py-6">
            <div className="px-4 mx-auto mt-3 max-w-7xl sm:px-6 md:px-8">
              <div className="max-w-3xl overflow-hidden bg-white shadow sm:rounded-md">
                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.users.users.map((person) => (
                        <PersonItem person={person} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </MainContainer>
  );
};

export default withApollo({ ssr: true })(ChangeRoles);
