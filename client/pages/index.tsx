import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [user, setUser] = useState(0);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
