import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type ChoiceInput = {
  id: Scalars['String'];
  text: Scalars['String'];
  choicePhoto?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  signIn?: Maybe<User>;
  logout: Scalars['Boolean'];
  createQuiz: Quiz;
  createQuizV2: Scalars['String'];
  addQuestionV2: Scalars['Boolean'];
  deleteQuiz: Scalars['Boolean'];
  publishQuiz: Quiz;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSignInArgs = {
  SignInInput: SignInInput;
};


export type MutationCreateQuizArgs = {
  quizInput: QuizInput;
};


export type MutationCreateQuizV2Args = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationAddQuestionV2Args = {
  data: QuestionInput;
  quizId: Scalars['String'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['String'];
};


export type MutationPublishQuizArgs = {
  id: Scalars['String'];
};

export type PaginatedQuizzes = {
  __typename?: 'PaginatedQuizzes';
  quizzes: Array<Quiz>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  quizzes: PaginatedQuizzes;
  myQuizzes: PaginatedQuizzes;
};


export type QueryQuizzesArgs = {
  quizzesInput: QuizzesInput;
};


export type QueryMyQuizzesArgs = {
  quizzesInput: QuizzesInput;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['String'];
  question: Scalars['String'];
  questionPhoto?: Maybe<Scalars['String']>;
  choices: Array<Scalars['JSONObject']>;
  answer: Scalars['String'];
  explanation?: Maybe<Scalars['String']>;
  hint?: Maybe<Scalars['String']>;
};

export type QuestionInput = {
  id: Scalars['String'];
  question: Scalars['String'];
  questionPhoto?: Maybe<Scalars['String']>;
  choices: Array<ChoiceInput>;
  answer: Scalars['String'];
  explanation?: Maybe<Scalars['String']>;
  hint?: Maybe<Scalars['String']>;
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['String'];
  authorId: Scalars['String'];
  author: User;
  title: Scalars['String'];
  description: Scalars['String'];
  quizPhoto?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Question>>;
  questionsLength: Scalars['Int'];
  results?: Maybe<Array<Result>>;
  tags?: Maybe<Array<Tag>>;
  isPublished: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type QuizInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  quizPhoto?: Maybe<Scalars['String']>;
  questions: Array<QuestionInput>;
  results: Array<ResultInput>;
  tags: Array<TagInput>;
};

export type QuizzesInput = {
  query?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  resultPhoto?: Maybe<Scalars['String']>;
  minimumPassingPercentage: Scalars['Int'];
};

export type ResultInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  resultPhoto?: Maybe<Scalars['String']>;
  minimumPassingPercentage: Scalars['Int'];
};

export type SaveAsDraftInput = {
  questions: Array<QuestionInput>;
  results: Array<ResultInput>;
};

export type SignInInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
  rememberMe: Scalars['Boolean'];
};

export type SignUpInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  birthday: Scalars['String'];
  gender: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type TagInput = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  googleId?: Maybe<Scalars['String']>;
  facebookId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  social?: Maybe<Scalars['JSONObject']>;
  quizzes: Array<Quiz>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type QuizCardResponseFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'createdAt' | 'questionsLength' | 'isPublished'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'avatar'>
  ) }
);

export type QuizResponseFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'authorId' | 'title' | 'description' | 'quizPhoto' | 'isPublished' | 'createdAt' | 'updatedAt'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'email'>
  ), questions?: Maybe<Array<(
    { __typename?: 'Question' }
    & Pick<Question, 'id' | 'question' | 'questionPhoto' | 'choices' | 'answer' | 'explanation' | 'hint'>
  )>>, tags?: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>>, results?: Maybe<Array<(
    { __typename?: 'Result' }
    & Pick<Result, 'id' | 'title' | 'description' | 'resultPhoto' | 'minimumPassingPercentage'>
  )>> }
);

export type UserResponseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'googleId' | 'facebookId' | 'username' | 'email' | 'avatar' | 'coverPhoto' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'country' | 'bio' | 'social' | 'createdAt' | 'updatedAt'>
);

export type CreateQuizMutationVariables = Exact<{
  quizInput: QuizInput;
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id'>
  ) }
);

export type DeleteQuizMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteQuizMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuiz'>
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SignInMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
  rememberMe: Scalars['Boolean'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'User' }
    & UserResponseFragment
  )> }
);

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'User' }
    & UserResponseFragment
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserResponseFragment
  )> }
);

export type MyQuizzesQueryVariables = Exact<{
  quizzesInput: QuizzesInput;
}>;


export type MyQuizzesQuery = (
  { __typename?: 'Query' }
  & { myQuizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & Pick<PaginatedQuizzes, 'hasMore'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizCardResponseFragment
    )> }
  ) }
);

export type QuizzesQueryVariables = Exact<{
  quizzesInput: QuizzesInput;
}>;


export type QuizzesQuery = (
  { __typename?: 'Query' }
  & { quizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & Pick<PaginatedQuizzes, 'hasMore'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizCardResponseFragment
    )> }
  ) }
);

export const QuizCardResponseFragmentDoc = gql`
    fragment quizCardResponse on Quiz {
  id
  title
  description
  quizPhoto
  createdAt
  questionsLength
  isPublished
  author {
    firstName
    lastName
    avatar
  }
}
    `;
export const QuizResponseFragmentDoc = gql`
    fragment quizResponse on Quiz {
  id
  authorId
  author {
    firstName
    lastName
    avatar
    email
  }
  title
  description
  quizPhoto
  questions {
    id
    question
    questionPhoto
    choices
    answer
    explanation
    hint
  }
  tags {
    id
    name
  }
  results {
    id
    title
    description
    resultPhoto
    minimumPassingPercentage
  }
  isPublished
  createdAt
  updatedAt
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment userResponse on User {
  id
  googleId
  facebookId
  username
  email
  avatar
  coverPhoto
  firstName
  lastName
  birthday
  gender
  country
  bio
  social
  createdAt
  updatedAt
}
    `;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($quizInput: QuizInput!) {
  createQuiz(quizInput: $quizInput) {
    id
  }
}
    `;
export type CreateQuizMutationFn = Apollo.MutationFunction<CreateQuizMutation, CreateQuizMutationVariables>;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      quizInput: // value for 'quizInput'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, options);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($id: String!) {
  deleteQuiz(id: $id)
}
    `;
export type DeleteQuizMutationFn = Apollo.MutationFunction<DeleteQuizMutation, DeleteQuizMutationVariables>;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, options);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = Apollo.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = Apollo.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  logout
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($usernameOrEmail: String!, $password: String!, $rememberMe: Boolean!) {
  signIn(
    SignInInput: {usernameOrEmail: $usernameOrEmail, password: $password, rememberMe: $rememberMe}
  ) {
    ...userResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *      rememberMe: // value for 'rememberMe'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    ...userResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userResponse
  }
}
    ${UserResponseFragmentDoc}`;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MyQuizzesDocument = gql`
    query MyQuizzes($quizzesInput: QuizzesInput!) {
  myQuizzes(quizzesInput: $quizzesInput) {
    quizzes {
      ...quizCardResponse
    }
    hasMore
  }
}
    ${QuizCardResponseFragmentDoc}`;

/**
 * __useMyQuizzesQuery__
 *
 * To run a query within a React component, call `useMyQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQuizzesQuery({
 *   variables: {
 *      quizzesInput: // value for 'quizzesInput'
 *   },
 * });
 */
export function useMyQuizzesQuery(baseOptions: Apollo.QueryHookOptions<MyQuizzesQuery, MyQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQuizzesQuery, MyQuizzesQueryVariables>(MyQuizzesDocument, options);
      }
export function useMyQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQuizzesQuery, MyQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQuizzesQuery, MyQuizzesQueryVariables>(MyQuizzesDocument, options);
        }
export type MyQuizzesQueryHookResult = ReturnType<typeof useMyQuizzesQuery>;
export type MyQuizzesLazyQueryHookResult = ReturnType<typeof useMyQuizzesLazyQuery>;
export type MyQuizzesQueryResult = Apollo.QueryResult<MyQuizzesQuery, MyQuizzesQueryVariables>;
export const QuizzesDocument = gql`
    query Quizzes($quizzesInput: QuizzesInput!) {
  quizzes(quizzesInput: $quizzesInput) {
    quizzes {
      ...quizCardResponse
    }
    hasMore
  }
}
    ${QuizCardResponseFragmentDoc}`;

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
 *      quizzesInput: // value for 'quizzesInput'
 *   },
 * });
 */
export function useQuizzesQuery(baseOptions: Apollo.QueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, options);
      }
export function useQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuizzesQuery, QuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QuizzesQuery, QuizzesQueryVariables>(QuizzesDocument, options);
        }
export type QuizzesQueryHookResult = ReturnType<typeof useQuizzesQuery>;
export type QuizzesLazyQueryHookResult = ReturnType<typeof useQuizzesLazyQuery>;
export type QuizzesQueryResult = Apollo.QueryResult<QuizzesQuery, QuizzesQueryVariables>;