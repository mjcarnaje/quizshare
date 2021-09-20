import { useEffect } from "react";

import { useRouter } from "next/dist/client/router";

import { useMeQuery, MeQuery } from "../generated/graphql";

export const useIsAuth = (): MeQuery => {
  const { data, loading } = useMeQuery({ fetchPolicy: "cache-first" });
  const router = useRouter();

  useEffect(() => {
    // if there is no session id or user not found
    if (!loading && !data?.me) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);

  return data!;
};
