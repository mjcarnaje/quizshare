import { useEffect } from "react";

import { useRouter } from "next/dist/client/router";

import { useMeQuery, MeQuery } from "../generated/graphql";

type IUseIsAuth = { explore: boolean };

export const useIsAuth = (props?: IUseIsAuth): MeQuery => {
  const { data, loading } = useMeQuery({ fetchPolicy: "cache-first" });
  const router = useRouter();

  useEffect(() => {
    // if there is no session id or user not found
    if (!loading && !data?.me) {
      if (props?.explore) {
        router.replace("/explore");
      } else {
        router.replace("/login?next=" + router.pathname);
      }
    }
  }, [loading, data, router]);

  return data!;
};
