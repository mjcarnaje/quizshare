import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useMeQuery } from "../generated/graphql";

export const useIsAuthenticated = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    // if there is no session id or user not found
    if (!loading && !data?.me) {
      router.replace("login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};
