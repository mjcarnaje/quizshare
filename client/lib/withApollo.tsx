import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";

const apolloClient = (ctx?: NextPageContext | undefined) =>
  new ApolloClient({
    uri: "https:localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) ?? "",
    },
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

export default withApollo(apolloClient);
