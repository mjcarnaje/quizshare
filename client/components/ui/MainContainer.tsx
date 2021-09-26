import React, { ReactNode } from "react";

import Alert from "@components/alert/Alert";
import { CloudinaryContext } from "cloudinary-react";
import Head from "next/head";

interface Props {
  children?: ReactNode;
  title?: string;
  header?: boolean;
}

const MainContainer: React.FC<Props> = ({ children, title = "QuizShare" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CloudinaryContext
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
      >
        <div className="relative flex min-h-screen mx-auto overflow-hidden bg-gray-100">
          <Alert />
          {children}
        </div>
      </CloudinaryContext>
    </div>
  );
};

export default MainContainer;
