import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex items-center justify-between w-full h-12 px-8">
        <div>
          <h1>QuizShare</h1>
        </div>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
