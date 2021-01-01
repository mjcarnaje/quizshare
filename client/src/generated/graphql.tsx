import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  quiz_id: Scalars['Float'];
  question: Scalars['String'];
  question_photo?: Maybe<Scalars['String']>;
  choices: Array<Scalars['JSONObject']>;
  answer: Scalars['Float'];
  explanation?: Maybe<Scalars['String']>;
  with_explanation: Scalars['Boolean'];
  hint?: Maybe<Scalars['String']>;
  with_hint: Scalars['Boolean'];
};


export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  quiz_id: Scalars['Float'];
  author_id: Scalars['Float'];
  author: User;
  created_at: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  birthday: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  profile: Profile;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['ID'];
  author_id: Scalars['Float'];
  author: User;
  title: Scalars['String'];
  description: Scalars['String'];
  quiz_photo?: Maybe<Scalars['String']>;
  questions: Array<Question>;
  likes: Array<Like>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  quiz_id: Scalars['Float'];
  author_id: Scalars['Float'];
  author: User;
  text: Scalars['String'];
  created_at: Scalars['String'];
};

export type PaginatedQuizzes = {
  __typename?: 'PaginatedQuizzes';
  quizzes: Array<Quiz>;
  hasMore: Scalars['Boolean'];
};

export type ChoiceInput = {
  choice_id: Scalars['Float'];
  text: Scalars['String'];
  choicePhoto?: Maybe<Scalars['String']>;
};

export type QuestionInput = {
  question: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  question_photo?: Maybe<Scalars['String']>;
  choices: Array<ChoiceInput>;
  answer: Scalars['Float'];
  explanation?: Maybe<Scalars['String']>;
  with_explanation?: Maybe<Scalars['Boolean']>;
  hint?: Maybe<Scalars['String']>;
  with_hint?: Maybe<Scalars['Boolean']>;
};

export type QuizInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  quiz_photo?: Maybe<Scalars['String']>;
  questions: Array<QuestionInput>;
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirm_password: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  gender: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  quizzes: PaginatedQuizzes;
  me?: Maybe<User>;
  getUsers: Array<User>;
};


export type QueryQuizzesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createQuiz: Quiz;
  deleteComment: Scalars['String'];
  deleteQuiz: Scalars['String'];
  toggleLike: Scalars['String'];
  updateQuiz: Quiz;
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: User;
  logout: Scalars['Boolean'];
  register: User;
};


export type MutationCreateCommentArgs = {
  text: Scalars['String'];
  quiz_id: Scalars['Float'];
};


export type MutationCreateQuizArgs = {
  data: QuizInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['Float'];
  quiz_id: Scalars['Float'];
};


export type MutationDeleteQuizArgs = {
  quiz_id: Scalars['Float'];
};


export type MutationToggleLikeArgs = {
  quiz_id: Scalars['Float'];
};


export type MutationUpdateQuizArgs = {
  inputs: QuizInput;
  quiz_id: Scalars['Float'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type QuizzesResponseFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quiz_photo' | 'created_at'>
  & { likes: Array<(
    { __typename?: 'Like' }
    & Pick<Like, 'id'>
  )>, author: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email' | 'avatar'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'name'>
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'created_at' | 'updated_at'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'first_name' | 'last_name' | 'birthday' | 'gender' | 'name'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirm_password: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  gender: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'created_at'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'first_name' | 'last_name' | 'birthday' | 'gender' | 'name'>
    ) }
  ) }
);

export type ToggleLikeMutationVariables = Exact<{
  quiz_id: Scalars['Float'];
}>;


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleLike'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'created_at' | 'updated_at'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'first_name' | 'last_name' | 'birthday' | 'gender' | 'name'>
    ) }
  )> }
);

export type QuizzesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type QuizzesQuery = (
  { __typename?: 'Query' }
  & { quizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & Pick<PaginatedQuizzes, 'hasMore'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizzesResponseFragment
    )> }
  ) }
);

export const QuizzesResponseFragmentDoc = gql`
    fragment QuizzesResponse on Quiz {
  id
  title
  description
  quiz_photo
  created_at
  likes {
    id
  }
  author {
    username
    email
    avatar
    profile {
      name
    }
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($emailOrUsername: String!, $password: String!) {
  login(data: {emailOrUsername: $emailOrUsername, password: $password}) {
    id
    username
    email
    avatar
    created_at
    updated_at
    profile {
      id
      first_name
      last_name
      birthday
      gender
      name
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!, $confirm_password: String!, $first_name: String!, $last_name: String!, $year: String!, $month: String!, $day: String!, $gender: String!) {
  register(
    data: {username: $username, email: $email, password: $password, confirm_password: $confirm_password, first_name: $first_name, last_name: $last_name, year: $year, month: $month, day: $day, gender: $gender}
  ) {
    id
    username
    email
    avatar
    created_at
    profile {
      id
      first_name
      last_name
      birthday
      gender
      name
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirm_password: // value for 'confirm_password'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      year: // value for 'year'
 *      month: // value for 'month'
 *      day: // value for 'day'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation ToggleLike($quiz_id: Float!) {
  toggleLike(quiz_id: $quiz_id)
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, baseOptions);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    avatar
    created_at
    updated_at
    profile {
      id
      first_name
      last_name
      birthday
      gender
      name
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const QuizzesDocument = gql`
    query Quizzes($limit: Int!, $cursor: String) {
  quizzes(limit: $limit, cursor: $cursor) {
    hasMore
    quizzes {
      ...QuizzesResponse
    }
  }
}
    ${QuizzesResponseFragmentDoc}`;

/**
 * __useQuizzesQuery__
 *
 * To run a query within a React component, call `useQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizzesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useQuizzesQuery(baseOptions: Apollo.QueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
        return Apollo.useQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, baseOptions);
      }
export function useQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
          return Apollo.useLazyQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, baseOptions);
        }
export type QuizzesQueryHookResult = ReturnType<typeof useQuizzesQuery>;
export type QuizzesLazyQueryHookResult = ReturnType<typeof useQuizzesLazyQuery>;
export type QuizzesQueryResult = Apollo.QueryResult<QuizzesQuery, QuizzesQueryVariables>;