import React, { ReactNode } from "react";

import Head from "next/head";

interface Props {
  children?: ReactNode;
  title?: string;
  header?: boolean;
}

const MainContainer: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative flex min-h-screen mx-auto overflow-hidden bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
