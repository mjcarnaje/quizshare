import React from "react";

import Layout from "@components/Layout";
import withApollo from "@lib/withApollo";

const CreateQuiz = () => {
  return (
    <Layout title="Create Quiz">
      <p>Hello</p>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateQuiz);
