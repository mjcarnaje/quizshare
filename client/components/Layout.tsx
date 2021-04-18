import { useApolloClient } from "@apollo/client";
import { useMeQuery, useSignOutMutation } from "generated/graphql";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
  header?: boolean;
};

const Layout = ({
  children,
  title = "This is the default title",
  header = true,
}: Props) => {
  const router = useRouter();
  const apolloClient = useApolloClient();

  const { data } = useMeQuery({ skip: typeof window === undefined });
  const [signOut] = useSignOutMutation();

  let body;

  if (data?.me) {
    body = (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        <button
          onClick={async () => {
            await signOut();
            router.push("/login");
            apolloClient.clearStore();
          }}
          className="px-4 py-2"
        >
          Logout
        </button>
      </>
    );
  } else {
    body = (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </>
    );
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {header ? (
        <header className="sticky top-0">
          <nav className="flex items-center justify-between w-full h-12 px-8 shadow">
            <div>
              <h1 className="text-xl font-semibold text-purple-500 font-berkshire">
                QuizShare
              </h1>
            </div>
            <div>{body}</div>
          </nav>
        </header>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
