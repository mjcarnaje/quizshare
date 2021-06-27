import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const link = ApolloLink.from([errorLink, httpLink]);

const apolloClient = (ctx?: NextPageContext | undefined) =>
  new ApolloClient({
    link,
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
