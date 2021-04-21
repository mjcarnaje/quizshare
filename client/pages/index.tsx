import React from "react";

import Layout from "@components/Layout";
import { useMeQuery } from "@generated/graphql";
import withApollo from "@lib/withApollo";
import { useIsAuthenticated } from "@utils/useIsAuthenticated";

const IndexPage = () => {
  useIsAuthenticated();

  const { data, loading } = useMeQuery();

  if (!data?.me && loading) {
    return <h1>Loading..</h1>;
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <pre>{JSON.stringify(data?.me, null, 2)}</pre>
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);
