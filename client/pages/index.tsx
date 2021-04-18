import Layout from "../components/Layout";
import { useIsAuthenticated } from "../utils/useIsAuthenticated";
import withApollo from "@lib/withApollo";

const IndexPage = () => {
  useIsAuthenticated();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
    </Layout>
  );
};

export default withApollo({ ssr: true })(IndexPage);
