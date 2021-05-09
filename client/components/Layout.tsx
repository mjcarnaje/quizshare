import React, { ReactNode } from "react";

import Head from "next/head";

import HeaderNav from "./header/HeaderNav";

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
      {children}
    </div>
  );
};

export default Layout;
