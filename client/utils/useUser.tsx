import { useEffect } from "react";

import { IUser } from "@customtypes/index";
import { useRouter } from "next/dist/client/router";

import { useMeQuery } from "../generated/graphql";

type IUseUser = { noRedirect?: boolean; redirectTo?: string };
type IUseUserResult = {
  user?: IUser | null;
};

export const useUser = (props?: IUseUser): IUseUserResult => {
  const { data, loading } = useMeQuery({ fetchPolicy: "cache-first" });

  const router = useRouter();

  useEffect(() => {
    // if user not found
    if (!loading && !data?.me) {
      if (!props?.noRedirect && props?.redirectTo) {
        router.replace(props.redirectTo);
      } else if (!props?.noRedirect) {
        router.replace("/login?next=" + router.pathname);
      }
    }
  }, [loading, data, router]);

  return { user: data?.me };
};
