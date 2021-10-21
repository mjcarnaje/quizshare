import Layout from "@components/layout/Layout";
import NestedLayout from "@components/layout/NestedLayout";
import withApollo from "@utils/withApollo";
import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  return (
    <Layout title="Profile">
      <NestedLayout showSearchBar={false}>
        <div className="flex max-w-3xl px-4 mx-auto space-x-6 sm:px-6 md:px-8">
          <p>{router.query.id}</p>
        </div>
      </NestedLayout>
    </Layout>
  );
}

export default withApollo({ ssr: false })(User);
