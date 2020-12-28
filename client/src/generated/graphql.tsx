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
  question: Scalars['String'];
  questionPhoto?: Maybe<Scalars['String']>;
  choices: Array<Scalars['JSONObject']>;
  answer: Scalars['Float'];
  explanation?: Maybe<Scalars['String']>;
  withExplanation: Scalars['Boolean'];
  hint?: Maybe<Scalars['String']>;
  withHint: Scalars['Boolean'];
};


export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  birthday: Scalars['String'];
  gender: Scalars['String'];
  name: Scalars['String'];
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID'];
  quizId: Scalars['Float'];
  authorId: Scalars['Float'];
  author: User;
  createdAt: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  profile: Profile;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['ID'];
  authorId: Scalars['Float'];
  author: User;
  title: Scalars['String'];
  description: Scalars['String'];
  quizPhoto?: Maybe<Scalars['String']>;
  questions: Array<Question>;
  createdAt: Scalars['String'];
  updateAt: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  quizId: Scalars['Float'];
  authorId: Scalars['Float'];
  author: User;
  text: Scalars['String'];
  createdAt: Scalars['String'];
};

export type ChoiceInput = {
  choiceId: Scalars['Float'];
  text: Scalars['String'];
  choicePhoto?: Maybe<Scalars['String']>;
};

export type QuestionInput = {
  question: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  questionPhoto?: Maybe<Scalars['String']>;
  choices: Array<ChoiceInput>;
  answer: Scalars['Float'];
  explanation?: Maybe<Scalars['String']>;
  withExplanation?: Maybe<Scalars['Boolean']>;
  hint?: Maybe<Scalars['String']>;
  withHint?: Maybe<Scalars['Boolean']>;
};

export type QuizInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  quizPhoto?: Maybe<Scalars['String']>;
  questions: Array<QuestionInput>;
};

export type ChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  gender: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getUsers: Array<User>;
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
  quizId: Scalars['Float'];
};


export type MutationCreateQuizArgs = {
  data: QuizInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['Float'];
  quizId: Scalars['Float'];
};


export type MutationDeleteQuizArgs = {
  quizId: Scalars['Float'];
};


export type MutationToggleLikeArgs = {
  quizId: Scalars['Float'];
};


export type MutationUpdateQuizArgs = {
  inputs: QuizInput;
  quizId: Scalars['Float'];
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
  password: Scalars['String'];
  emailOrUsername: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type LoginMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'createdAt'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'name'>
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
  confirmPassword: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  gender: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'createdAt'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'name'>
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'createdAt'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'name'>
    ) }
  )> }
);


export const LoginDocument = gql`
    mutation Login($emailOrUsername: String!, $password: String!) {
  login(emailOrUsername: $emailOrUsername, password: $password) {
    id
    username
    email
    avatar
    createdAt
    profile {
      id
      firstName
      lastName
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
    mutation Register($username: String!, $email: String!, $password: String!, $confirmPassword: String!, $firstName: String!, $lastName: String!, $year: String!, $month: String!, $day: String!, $gender: String!) {
  register(
    data: {username: $username, email: $email, password: $password, confirmPassword: $confirmPassword, firstName: $firstName, lastName: $lastName, year: $year, month: $month, day: $day, gender: $gender}
  ) {
    id
    username
    email
    avatar
    createdAt
    profile {
      id
      firstName
      lastName
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
 *      confirmPassword: // value for 'confirmPassword'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
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
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    email
    avatar
    createdAt
    profile {
      id
      firstName
      lastName
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