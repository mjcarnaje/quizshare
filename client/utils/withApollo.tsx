import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedComment, PaginatedQuizzes } from "@generated/graphql";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo";

const apolloClient = (ctx?: NextPageContext) => {
  const apollo = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) ?? "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getQuizzes: {
              keyArgs: ["isPublished", "isMine", "quizzesInput", ["search"]],
              merge(
                existing: PaginatedQuizzes,
                incoming: PaginatedQuizzes
              ): PaginatedQuizzes {
                return {
                  pageInfo: incoming.pageInfo,
                  quizzes: [...(existing?.quizzes ?? []), ...incoming.quizzes],
                };
              },
            },
            getComments: {
              keyArgs: ["quizId"],
              merge(
                existing: PaginatedComment,
                incoming: PaginatedComment
              ): PaginatedComment {
                return {
                  pageInfo: incoming.pageInfo,
                  comments: [
                    ...(existing?.comments ?? []),
                    ...incoming.comments,
                  ],
                };
              },
            },
          },
        },
      },
    }),
    connectToDevTools: true,
  });

  return apollo;
};

export default withApollo(apolloClient);
