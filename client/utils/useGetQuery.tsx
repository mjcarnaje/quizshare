import { useRouter } from "next/router";

export const useGetQuery = (param: string): string => {
  const router = useRouter();

  return router.query[param] as string;
};
