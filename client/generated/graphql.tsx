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
  saveQuiz: Quiz;
  editQuiz: Quiz;
  deleteQuiz: Scalars['Boolean'];
  publishQuiz: Quiz;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSignInArgs = {
  SignInInput: SignInInput;
};


export type MutationSaveQuizArgs = {
  quizId: QuizIdInput;
  quizInput: QuizInput;
};


export type MutationEditQuizArgs = {
  quizInput: QuizInput;
};


export type MutationDeleteQuizArgs = {
  quizId: Scalars['String'];
};


export type MutationPublishQuizArgs = {
  quizId: Scalars['String'];
};

export type PaginatedQuizzes = {
  __typename?: 'PaginatedQuizzes';
  quizzes: Array<Quiz>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getPublishedQuizzes: PaginatedQuizzes;
  getMyQuizzes: PaginatedQuizzes;
  getQuiz: Quiz;
};


export type QueryGetPublishedQuizzesArgs = {
  quizzesInput: QuizzesInput;
};


export type QueryGetMyQuizzesArgs = {
  quizzesInput: QuizzesInput;
};


export type QueryGetQuizArgs = {
  quizId: Scalars['String'];
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

export type QuizIdInput = {
  quizId?: Maybe<Scalars['String']>;
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

export type DeleteQuizMutationVariables = Exact<{
  quizId: Scalars['String'];
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

export type PublishQuizMutationVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type PublishQuizMutation = (
  { __typename?: 'Mutation' }
  & { publishQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id'>
  ) }
);

export type SaveQuizMutationVariables = Exact<{
  quizInput: QuizInput;
  quizId: QuizIdInput;
}>;


export type SaveQuizMutation = (
  { __typename?: 'Mutation' }
  & { saveQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id'>
  ) }
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

export type GetMyQuizzesQueryVariables = Exact<{
  quizzesInput: QuizzesInput;
}>;


export type GetMyQuizzesQuery = (
  { __typename?: 'Query' }
  & { getMyQuizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & Pick<PaginatedQuizzes, 'hasMore'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizCardResponseFragment
    )> }
  ) }
);

export type GetPublishedQuizzesQueryVariables = Exact<{
  quizzesInput: QuizzesInput;
}>;


export type GetPublishedQuizzesQuery = (
  { __typename?: 'Query' }
  & { getPublishedQuizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & Pick<PaginatedQuizzes, 'hasMore'>
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizCardResponseFragment
    )> }
  ) }
);

export type GetQuizQueryVariables = Exact<{
  quizId: Scalars['String'];
  isInput: Scalars['Boolean'];
}>;


export type GetQuizQuery = (
  { __typename?: 'Query' }
  & { getQuiz: (
    { __typename?: 'Quiz' }
    & MakeOptional<Pick<Quiz, 'id' | 'authorId' | 'title' | 'description' | 'quizPhoto' | 'isPublished' | 'createdAt' | 'updatedAt'>, 'id' | 'authorId' | 'isPublished' | 'createdAt' | 'updatedAt'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'avatar' | 'email'>
    )>, questions?: Maybe<Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'id' | 'question' | 'questionPhoto' | 'choices' | 'answer' | 'explanation' | 'hint'>
    )>>, tags?: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>, results?: Maybe<Array<(
      { __typename?: 'Result' }
      & Pick<Result, 'id' | 'title' | 'description' | 'resultPhoto' | 'minimumPassingPercentage'>
    )>> }
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
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($quizId: String!) {
  deleteQuiz(quizId: $quizId)
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
 *      quizId: // value for 'quizId'
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
export const PublishQuizDocument = gql`
    mutation PublishQuiz($quizId: String!) {
  publishQuiz(quizId: $quizId) {
    id
  }
}
    `;
export type PublishQuizMutationFn = Apollo.MutationFunction<PublishQuizMutation, PublishQuizMutationVariables>;

/**
 * __usePublishQuizMutation__
 *
 * To run a mutation, you first call `usePublishQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishQuizMutation, { data, loading, error }] = usePublishQuizMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function usePublishQuizMutation(baseOptions?: Apollo.MutationHookOptions<PublishQuizMutation, PublishQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishQuizMutation, PublishQuizMutationVariables>(PublishQuizDocument, options);
      }
export type PublishQuizMutationHookResult = ReturnType<typeof usePublishQuizMutation>;
export type PublishQuizMutationResult = Apollo.MutationResult<PublishQuizMutation>;
export type PublishQuizMutationOptions = Apollo.BaseMutationOptions<PublishQuizMutation, PublishQuizMutationVariables>;
export const SaveQuizDocument = gql`
    mutation SaveQuiz($quizInput: QuizInput!, $quizId: QuizIdInput!) {
  saveQuiz(quizInput: $quizInput, quizId: $quizId) {
    id
  }
}
    `;
export type SaveQuizMutationFn = Apollo.MutationFunction<SaveQuizMutation, SaveQuizMutationVariables>;

/**
 * __useSaveQuizMutation__
 *
 * To run a mutation, you first call `useSaveQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveQuizMutation, { data, loading, error }] = useSaveQuizMutation({
 *   variables: {
 *      quizInput: // value for 'quizInput'
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useSaveQuizMutation(baseOptions?: Apollo.MutationHookOptions<SaveQuizMutation, SaveQuizMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveQuizMutation, SaveQuizMutationVariables>(SaveQuizDocument, options);
      }
export type SaveQuizMutationHookResult = ReturnType<typeof useSaveQuizMutation>;
export type SaveQuizMutationResult = Apollo.MutationResult<SaveQuizMutation>;
export type SaveQuizMutationOptions = Apollo.BaseMutationOptions<SaveQuizMutation, SaveQuizMutationVariables>;
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
export const GetMyQuizzesDocument = gql`
    query GetMyQuizzes($quizzesInput: QuizzesInput!) {
  getMyQuizzes(quizzesInput: $quizzesInput) {
    quizzes {
      ...quizCardResponse
    }
    hasMore
  }
}
    ${QuizCardResponseFragmentDoc}`;

/**
 * __useGetMyQuizzesQuery__
 *
 * To run a query within a React component, call `useGetMyQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyQuizzesQuery({
 *   variables: {
 *      quizzesInput: // value for 'quizzesInput'
 *   },
 * });
 */
export function useGetMyQuizzesQuery(baseOptions: Apollo.QueryHookOptions<GetMyQuizzesQuery, GetMyQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyQuizzesQuery, GetMyQuizzesQueryVariables>(GetMyQuizzesDocument, options);
      }
export function useGetMyQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyQuizzesQuery, GetMyQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyQuizzesQuery, GetMyQuizzesQueryVariables>(GetMyQuizzesDocument, options);
        }
export type GetMyQuizzesQueryHookResult = ReturnType<typeof useGetMyQuizzesQuery>;
export type GetMyQuizzesLazyQueryHookResult = ReturnType<typeof useGetMyQuizzesLazyQuery>;
export type GetMyQuizzesQueryResult = Apollo.QueryResult<GetMyQuizzesQuery, GetMyQuizzesQueryVariables>;
export const GetPublishedQuizzesDocument = gql`
    query GetPublishedQuizzes($quizzesInput: QuizzesInput!) {
  getPublishedQuizzes(quizzesInput: $quizzesInput) {
    quizzes {
      ...quizCardResponse
    }
    hasMore
  }
}
    ${QuizCardResponseFragmentDoc}`;

/**
 * __useGetPublishedQuizzesQuery__
 *
 * To run a query within a React component, call `useGetPublishedQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublishedQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublishedQuizzesQuery({
 *   variables: {
 *      quizzesInput: // value for 'quizzesInput'
 *   },
 * });
 */
export function useGetPublishedQuizzesQuery(baseOptions: Apollo.QueryHookOptions<GetPublishedQuizzesQuery, GetPublishedQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublishedQuizzesQuery, GetPublishedQuizzesQueryVariables>(GetPublishedQuizzesDocument, options);
      }
export function useGetPublishedQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublishedQuizzesQuery, GetPublishedQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublishedQuizzesQuery, GetPublishedQuizzesQueryVariables>(GetPublishedQuizzesDocument, options);
        }
export type GetPublishedQuizzesQueryHookResult = ReturnType<typeof useGetPublishedQuizzesQuery>;
export type GetPublishedQuizzesLazyQueryHookResult = ReturnType<typeof useGetPublishedQuizzesLazyQuery>;
export type GetPublishedQuizzesQueryResult = Apollo.QueryResult<GetPublishedQuizzesQuery, GetPublishedQuizzesQueryVariables>;
export const GetQuizDocument = gql`
    query GetQuiz($quizId: String!, $isInput: Boolean!) {
  getQuiz(quizId: $quizId) {
    id @skip(if: $isInput)
    authorId @skip(if: $isInput)
    author @skip(if: $isInput) {
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
    isPublished @skip(if: $isInput)
    createdAt @skip(if: $isInput)
    updatedAt @skip(if: $isInput)
  }
}
    `;

/**
 * __useGetQuizQuery__
 *
 * To run a query within a React component, call `useGetQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      isInput: // value for 'isInput'
 *   },
 * });
 */
export function useGetQuizQuery(baseOptions: Apollo.QueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
      }
export function useGetQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizQuery, GetQuizQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizQuery, GetQuizQueryVariables>(GetQuizDocument, options);
        }
export type GetQuizQueryHookResult = ReturnType<typeof useGetQuizQuery>;
export type GetQuizLazyQueryHookResult = ReturnType<typeof useGetQuizLazyQuery>;
export type GetQuizQueryResult = Apollo.QueryResult<GetQuizQuery, GetQuizQueryVariables>;
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