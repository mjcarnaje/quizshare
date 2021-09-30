import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { PaginatedComment, PaginatedQuizzes } from "@generated/graphql";
import { NextPageContext } from "next";
import { withApollo } from "next-apollo";

const apolloClient = (ctx?: NextPageContext) => {
  const apollo = new ApolloClient({
    link: new HttpLink({
      uri:
        process.env.NODE_ENV === "production"
          ? "https://api.quizshare.me/graphql"
          : "http://localhost:4000/graphql",
      credentials: "include",
      headers: {
        cookie:
          (typeof window === "undefined"
            ? ctx?.req?.headers.cookie
            : undefined) ?? "",
      },
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Score: {
          keyFields: ["quizId"],
        },
        Query: {
          fields: {
            getPublicQuizzes: {
              keyArgs: ["input", ["search"]],
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
            getFollowedQuizzes: {
              keyArgs: ["input", ["search"]],
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
            getMeQuizzes: {
              keyArgs: ["input", ["search"]],
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
