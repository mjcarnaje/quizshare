import React, { ReactNode } from "react";

import { useRouter } from "next/dist/client/router";
import Head from "next/head";

import UserDropDown from "./dropdowns/UserDropdown";

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

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {header ? (
        <header className="sticky top-0">
          <nav className="flex items-center justify-between w-full px-8 shadow h-14">
            <button
              className="focus:outline-none"
              onClick={() => router.push("/")}
            >
              <h1 className="text-xl font-semibold text-purple-500 font-berkshire">
                QuizShare
              </h1>
            </button>
            <UserDropDown />
          </nav>
        </header>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
