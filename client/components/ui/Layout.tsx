import React, { ReactNode } from "react";

import Head from "next/head";

import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";

interface props {
  children?: ReactNode;
  title?: string;
  header?: boolean;
}

const Layout: React.FC<props> = ({
  children,
  title = "This is the default title",
  header = true,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {header ? <HeaderNav /> : null}
      <div className="relative flex min-h-screen pt-14 bg-gray-50">
        <Sidebar />
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
