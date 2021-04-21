import React from "react";

import Layout from "@components/Layout";
import withApollo from "@lib/withApollo";
import { useIsAuthenticated } from "@utils/useIsAuthenticated";

const IndexPage = () => {
  useIsAuthenticated();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);
