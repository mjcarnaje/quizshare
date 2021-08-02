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

export type ChangeRoleInput = {
  userId: Scalars['String'];
  newRole: UserRole;
};

export type CheckAnswerInput = {
  quizId: Scalars['String'];
  answers: Scalars['JSONObject'];
};

export type CheckAnswerResult = {
  __typename?: 'CheckAnswerResult';
  score: Scalars['Int'];
  percentage: Scalars['Float'];
};

export type ChoiceInput = {
  id: Scalars['String'];
  text: Scalars['String'];
  choicePhoto?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  quizId: Scalars['String'];
  authorId: Scalars['String'];
  author: User;
  text: Scalars['String'];
  isMine: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  signIn?: Maybe<User>;
  logout: Scalars['Boolean'];
  addComment: Comment;
  editComment: Comment;
  deleteComment: Scalars['Boolean'];
  saveQuiz: Quiz;
  deleteQuiz: Scalars['Boolean'];
  publishQuiz: Quiz;
  toggleLike: Quiz;
  toggleBookmark: Quiz;
  checkAnswer: CheckAnswerResult;
  changeRole: User;
  toggleSubscription: User;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSignInArgs = {
  SignInInput: SignInInput;
};


export type MutationAddCommentArgs = {
  text: Scalars['String'];
  quizId: Scalars['String'];
};


export type MutationEditCommentArgs = {
  text: Scalars['String'];
  commentId: Scalars['String'];
  quizId: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
  quizId: Scalars['String'];
};


export type MutationSaveQuizArgs = {
  quizId?: Maybe<Scalars['String']>;
  quizInput: QuizInput;
};


export type MutationDeleteQuizArgs = {
  quizId: Scalars['String'];
};


export type MutationPublishQuizArgs = {
  quizId: Scalars['String'];
};


export type MutationToggleLikeArgs = {
  quizId: Scalars['String'];
};


export type MutationToggleBookmarkArgs = {
  quizId: Scalars['String'];
};


export type MutationCheckAnswerArgs = {
  checkAnswerInput: CheckAnswerInput;
};


export type MutationChangeRoleArgs = {
  changeRoleInput: ChangeRoleInput;
};


export type MutationToggleSubscriptionArgs = {
  userId: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
};

export type PaginatedComment = {
  __typename?: 'PaginatedComment';
  comments: Array<Comment>;
  pageInfo: PageInfo;
};

export type PaginatedQuizzes = {
  __typename?: 'PaginatedQuizzes';
  quizzes: Array<Quiz>;
  pageInfo: PageInfo;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  users: Array<User>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getComments: PaginatedComment;
  getQuizzes: PaginatedQuizzes;
  getQuiz: Quiz;
  users: PaginatedUsers;
  me?: Maybe<User>;
};


export type QueryGetCommentsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Float'];
  quizId: Scalars['String'];
};


export type QueryGetQuizzesArgs = {
  isMine: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  quizzesInput: QuizzesInput;
};


export type QueryGetQuizArgs = {
  isInput: Scalars['Boolean'];
  quizId: Scalars['String'];
};


export type QueryUsersArgs = {
  usersInput: UsersInput;
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
  questions: Array<Question>;
  questionCount: Scalars['Int'];
  results: Array<Result>;
  tags: Array<Tag>;
  isPublished: Scalars['Boolean'];
  likeCount: Scalars['Int'];
  commentCount: Scalars['Int'];
  bookmarkCount: Scalars['Int'];
  isMine: Scalars['Boolean'];
  isLiked: Scalars['Boolean'];
  isBookmarked: Scalars['Boolean'];
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
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  resultPhoto?: Maybe<Scalars['String']>;
  minimumPercent: Scalars['Int'];
};

export type ResultInput = {
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  resultPhoto?: Maybe<Scalars['String']>;
  minimumPercent: Scalars['Int'];
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

export type Subscription = {
  __typename?: 'Subscription';
  followedId: Scalars['String'];
  followerId: Scalars['String'];
  follower: User;
  followed: User;
  createdAt: Scalars['String'];
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
  role: UserRole;
  followedCount: Scalars['Int'];
  followerCount: Scalars['Int'];
  isFollowed: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export enum UserRole {
  SuperAdmin = 'SUPER_ADMIN',
  Admin = 'ADMIN',
  User = 'USER'
}

export type UsersInput = {
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
};

export type AuthorFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'avatar' | 'firstName' | 'lastName' | 'email' | 'username' | 'isFollowed'>
);

export type CommentFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'text' | 'isMine' | 'authorId' | 'createdAt' | 'updatedAt'>
  & { author: (
    { __typename?: 'User' }
    & AuthorFragment
  ) }
);

export type MeFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'coverPhoto' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'country' | 'bio' | 'social' | 'role' | 'createdAt' | 'updatedAt'>
);

export type PageInfoFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
);

export type QuestionFragment = (
  { __typename?: 'Question' }
  & Pick<Question, 'id' | 'question' | 'questionPhoto' | 'choices' | 'answer'>
);

export type QuizFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'isPublished' | 'authorId' | 'createdAt' | 'updatedAt'>
  & { questions: Array<(
    { __typename?: 'Question' }
    & QuestionFragment
  )>, tags: Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>, results: Array<(
    { __typename?: 'Result' }
    & ResultFragment
  )>, author: (
    { __typename?: 'User' }
    & AuthorFragment
  ) }
);

export type QuizCardFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'createdAt' | 'questionCount' | 'isPublished' | 'isMine' | 'likeCount' | 'bookmarkCount' | 'commentCount' | 'isLiked' | 'isBookmarked' | 'authorId'>
  & { author: (
    { __typename?: 'User' }
    & AuthorFragment
  ) }
);

export type ResultFragment = (
  { __typename?: 'Result' }
  & Pick<Result, 'id' | 'title' | 'description' | 'resultPhoto' | 'minimumPercent'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'firstName' | 'lastName' | 'gender' | 'role' | 'createdAt'>
);

export type AddCommentMutationVariables = Exact<{
  quizId: Scalars['String'];
  text: Scalars['String'];
}>;


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & { addComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type ChangeRoleMutationVariables = Exact<{
  changeRoleInput: ChangeRoleInput;
}>;


export type ChangeRoleMutation = (
  { __typename?: 'Mutation' }
  & { changeRole: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type CheckAnswerMutationVariables = Exact<{
  checkAnswerInput: CheckAnswerInput;
}>;


export type CheckAnswerMutation = (
  { __typename?: 'Mutation' }
  & { checkAnswer: (
    { __typename?: 'CheckAnswerResult' }
    & Pick<CheckAnswerResult, 'score' | 'percentage'>
  ) }
);

export type DeleteCommentMutationVariables = Exact<{
  quizId: Scalars['String'];
  commentId: Scalars['String'];
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteComment'>
);

export type DeleteQuizMutationVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type DeleteQuizMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuiz'>
);

export type EditCommentMutationVariables = Exact<{
  quizId: Scalars['String'];
  commentId: Scalars['String'];
  text: Scalars['String'];
}>;


export type EditCommentMutation = (
  { __typename?: 'Mutation' }
  & { editComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
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
  quizId?: Maybe<Scalars['String']>;
}>;


export type SaveQuizMutation = (
  { __typename?: 'Mutation' }
  & { saveQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & QuestionFragment
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>, results: Array<(
      { __typename?: 'Result' }
      & ResultFragment
    )> }
  ) }
);

export type SignInMutationVariables = Exact<{
  signInInput: SignInInput;
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'User' }
    & MeFragment
  )> }
);

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'User' }
    & MeFragment
  ) }
);

export type ToggleBookmarkMutationVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type ToggleBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { toggleBookmark: (
    { __typename?: 'Quiz' }
    & QuizCardFragment
  ) }
);

export type ToggleLikeMutationVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & { toggleLike: (
    { __typename?: 'Quiz' }
    & QuizCardFragment
  ) }
);

export type ToggleSubscriptionMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ToggleSubscriptionMutation = (
  { __typename?: 'Mutation' }
  & { toggleSubscription: (
    { __typename?: 'User' }
    & AuthorFragment
  ) }
);

export type GetCommentsQueryVariables = Exact<{
  quizId: Scalars['String'];
  limit: Scalars['Float'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { getComments: (
    { __typename?: 'PaginatedComment' }
    & { comments: Array<(
      { __typename?: 'Comment' }
      & CommentFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
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
    & MakeOptional<Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'isLiked' | 'isBookmarked' | 'questionCount' | 'likeCount' | 'commentCount' | 'isPublished' | 'authorId' | 'createdAt' | 'updatedAt'>, 'id' | 'isLiked' | 'isBookmarked' | 'questionCount' | 'likeCount' | 'commentCount' | 'isPublished' | 'authorId' | 'createdAt' | 'updatedAt'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & QuestionFragment
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>, results: Array<(
      { __typename?: 'Result' }
      & ResultFragment
    )>, author?: Maybe<(
      { __typename?: 'User' }
      & AuthorFragment
    )> }
  ) }
);

export type GetQuizzesQueryVariables = Exact<{
  quizzesInput: QuizzesInput;
  isPublished: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
}>;


export type GetQuizzesQuery = (
  { __typename?: 'Query' }
  & { getQuizzes: (
    { __typename?: 'PaginatedQuizzes' }
    & { quizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizCardFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type GetUsersQueryVariables = Exact<{
  usersInput: UsersInput;
}>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'PaginatedUsers' }
    & { users: Array<(
      { __typename?: 'User' }
      & UserFragment
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    ) }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & MeFragment
  )> }
);

export const AuthorFragmentDoc = gql`
    fragment Author on User {
  id
  avatar
  firstName
  lastName
  email
  username
  isFollowed
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  id
  text
  isMine
  authorId
  author {
    ...Author
  }
  createdAt
  updatedAt
}
    ${AuthorFragmentDoc}`;
export const MeFragmentDoc = gql`
    fragment Me on User {
  id
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
  role
  createdAt
  updatedAt
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  endCursor
  hasNextPage
}
    `;
export const QuestionFragmentDoc = gql`
    fragment Question on Question {
  id
  question
  questionPhoto
  choices
  answer
}
    `;
export const ResultFragmentDoc = gql`
    fragment Result on Result {
  id
  title
  description
  resultPhoto
  minimumPercent
}
    `;
export const QuizFragmentDoc = gql`
    fragment Quiz on Quiz {
  id
  title
  description
  quizPhoto
  questions {
    ...Question
  }
  tags {
    id
    name
  }
  results {
    ...Result
  }
  isPublished
  authorId
  author {
    ...Author
  }
  createdAt
  updatedAt
}
    ${QuestionFragmentDoc}
${ResultFragmentDoc}
${AuthorFragmentDoc}`;
export const QuizCardFragmentDoc = gql`
    fragment QuizCard on Quiz {
  id
  title
  description
  quizPhoto
  createdAt
  questionCount
  isPublished
  isMine
  likeCount
  bookmarkCount
  commentCount
  isLiked
  isBookmarked
  authorId
  author {
    ...Author
  }
}
    ${AuthorFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  username
  email
  avatar
  firstName
  lastName
  gender
  role
  createdAt
}
    `;
export const AddCommentDocument = gql`
    mutation AddComment($quizId: String!, $text: String!) {
  addComment(quizId: $quizId, text: $text) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const ChangeRoleDocument = gql`
    mutation ChangeRole($changeRoleInput: ChangeRoleInput!) {
  changeRole(changeRoleInput: $changeRoleInput) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type ChangeRoleMutationFn = Apollo.MutationFunction<ChangeRoleMutation, ChangeRoleMutationVariables>;

/**
 * __useChangeRoleMutation__
 *
 * To run a mutation, you first call `useChangeRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeRoleMutation, { data, loading, error }] = useChangeRoleMutation({
 *   variables: {
 *      changeRoleInput: // value for 'changeRoleInput'
 *   },
 * });
 */
export function useChangeRoleMutation(baseOptions?: Apollo.MutationHookOptions<ChangeRoleMutation, ChangeRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeRoleMutation, ChangeRoleMutationVariables>(ChangeRoleDocument, options);
      }
export type ChangeRoleMutationHookResult = ReturnType<typeof useChangeRoleMutation>;
export type ChangeRoleMutationResult = Apollo.MutationResult<ChangeRoleMutation>;
export type ChangeRoleMutationOptions = Apollo.BaseMutationOptions<ChangeRoleMutation, ChangeRoleMutationVariables>;
export const CheckAnswerDocument = gql`
    mutation CheckAnswer($checkAnswerInput: CheckAnswerInput!) {
  checkAnswer(checkAnswerInput: $checkAnswerInput) {
    score
    percentage
  }
}
    `;
export type CheckAnswerMutationFn = Apollo.MutationFunction<CheckAnswerMutation, CheckAnswerMutationVariables>;

/**
 * __useCheckAnswerMutation__
 *
 * To run a mutation, you first call `useCheckAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkAnswerMutation, { data, loading, error }] = useCheckAnswerMutation({
 *   variables: {
 *      checkAnswerInput: // value for 'checkAnswerInput'
 *   },
 * });
 */
export function useCheckAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CheckAnswerMutation, CheckAnswerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckAnswerMutation, CheckAnswerMutationVariables>(CheckAnswerDocument, options);
      }
export type CheckAnswerMutationHookResult = ReturnType<typeof useCheckAnswerMutation>;
export type CheckAnswerMutationResult = Apollo.MutationResult<CheckAnswerMutation>;
export type CheckAnswerMutationOptions = Apollo.BaseMutationOptions<CheckAnswerMutation, CheckAnswerMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation DeleteComment($quizId: String!, $commentId: String!) {
  deleteComment(quizId: $quizId, commentId: $commentId)
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
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
export const EditCommentDocument = gql`
    mutation EditComment($quizId: String!, $commentId: String!, $text: String!) {
  editComment(quizId: $quizId, commentId: $commentId, text: $text) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;
export type EditCommentMutationFn = Apollo.MutationFunction<EditCommentMutation, EditCommentMutationVariables>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      commentId: // value for 'commentId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useEditCommentMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentMutation, EditCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentMutation, EditCommentMutationVariables>(EditCommentDocument, options);
      }
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<EditCommentMutation, EditCommentMutationVariables>;
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
    mutation SaveQuiz($quizInput: QuizInput!, $quizId: String) {
  saveQuiz(quizInput: $quizInput, quizId: $quizId) {
    id
    title
    description
    quizPhoto
    questions {
      ...Question
    }
    tags {
      id
      name
    }
    results {
      ...Result
    }
  }
}
    ${QuestionFragmentDoc}
${ResultFragmentDoc}`;
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
    mutation SignIn($signInInput: SignInInput!) {
  signIn(SignInInput: $signInInput) {
    ...Me
  }
}
    ${MeFragmentDoc}`;
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
 *      signInInput: // value for 'signInInput'
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
    ...Me
  }
}
    ${MeFragmentDoc}`;
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
export const ToggleBookmarkDocument = gql`
    mutation ToggleBookmark($quizId: String!) {
  toggleBookmark(quizId: $quizId) {
    ...QuizCard
  }
}
    ${QuizCardFragmentDoc}`;
export type ToggleBookmarkMutationFn = Apollo.MutationFunction<ToggleBookmarkMutation, ToggleBookmarkMutationVariables>;

/**
 * __useToggleBookmarkMutation__
 *
 * To run a mutation, you first call `useToggleBookmarkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleBookmarkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleBookmarkMutation, { data, loading, error }] = useToggleBookmarkMutation({
 *   variables: {
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useToggleBookmarkMutation(baseOptions?: Apollo.MutationHookOptions<ToggleBookmarkMutation, ToggleBookmarkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleBookmarkMutation, ToggleBookmarkMutationVariables>(ToggleBookmarkDocument, options);
      }
export type ToggleBookmarkMutationHookResult = ReturnType<typeof useToggleBookmarkMutation>;
export type ToggleBookmarkMutationResult = Apollo.MutationResult<ToggleBookmarkMutation>;
export type ToggleBookmarkMutationOptions = Apollo.BaseMutationOptions<ToggleBookmarkMutation, ToggleBookmarkMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation ToggleLike($quizId: String!) {
  toggleLike(quizId: $quizId) {
    ...QuizCard
  }
}
    ${QuizCardFragmentDoc}`;
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
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const ToggleSubscriptionDocument = gql`
    mutation ToggleSubscription($userId: String!) {
  toggleSubscription(userId: $userId) {
    ...Author
  }
}
    ${AuthorFragmentDoc}`;
export type ToggleSubscriptionMutationFn = Apollo.MutationFunction<ToggleSubscriptionMutation, ToggleSubscriptionMutationVariables>;

/**
 * __useToggleSubscriptionMutation__
 *
 * To run a mutation, you first call `useToggleSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleSubscriptionMutation, { data, loading, error }] = useToggleSubscriptionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useToggleSubscriptionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleSubscriptionMutation, ToggleSubscriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleSubscriptionMutation, ToggleSubscriptionMutationVariables>(ToggleSubscriptionDocument, options);
      }
export type ToggleSubscriptionMutationHookResult = ReturnType<typeof useToggleSubscriptionMutation>;
export type ToggleSubscriptionMutationResult = Apollo.MutationResult<ToggleSubscriptionMutation>;
export type ToggleSubscriptionMutationOptions = Apollo.BaseMutationOptions<ToggleSubscriptionMutation, ToggleSubscriptionMutationVariables>;
export const GetCommentsDocument = gql`
    query GetComments($quizId: String!, $limit: Float!, $cursor: String) {
  getComments(quizId: $quizId, limit: $limit, cursor: $cursor) {
    comments {
      ...Comment
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${CommentFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetQuizDocument = gql`
    query GetQuiz($quizId: String!, $isInput: Boolean!) {
  getQuiz(quizId: $quizId, isInput: $isInput) {
    id @skip(if: $isInput)
    title
    description
    quizPhoto
    questions {
      ...Question
    }
    tags {
      id
      name
    }
    results {
      ...Result
    }
    isLiked @skip(if: $isInput)
    isBookmarked @skip(if: $isInput)
    questionCount @skip(if: $isInput)
    likeCount @skip(if: $isInput)
    commentCount @skip(if: $isInput)
    isPublished @skip(if: $isInput)
    authorId @skip(if: $isInput)
    author @skip(if: $isInput) {
      ...Author
    }
    createdAt @skip(if: $isInput)
    updatedAt @skip(if: $isInput)
  }
}
    ${QuestionFragmentDoc}
${ResultFragmentDoc}
${AuthorFragmentDoc}`;

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
export const GetQuizzesDocument = gql`
    query GetQuizzes($quizzesInput: QuizzesInput!, $isPublished: Boolean!, $isMine: Boolean!) {
  getQuizzes(
    quizzesInput: $quizzesInput
    isPublished: $isPublished
    isMine: $isMine
  ) {
    quizzes {
      ...QuizCard
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${QuizCardFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetQuizzesQuery__
 *
 * To run a query within a React component, call `useGetQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizzesQuery({
 *   variables: {
 *      quizzesInput: // value for 'quizzesInput'
 *      isPublished: // value for 'isPublished'
 *      isMine: // value for 'isMine'
 *   },
 * });
 */
export function useGetQuizzesQuery(baseOptions: Apollo.QueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
      }
export function useGetQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizzesQuery, GetQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizzesQuery, GetQuizzesQueryVariables>(GetQuizzesDocument, options);
        }
export type GetQuizzesQueryHookResult = ReturnType<typeof useGetQuizzesQuery>;
export type GetQuizzesLazyQueryHookResult = ReturnType<typeof useGetQuizzesLazyQuery>;
export type GetQuizzesQueryResult = Apollo.QueryResult<GetQuizzesQuery, GetQuizzesQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($usersInput: UsersInput!) {
  users(usersInput: $usersInput) {
    users {
      ...User
    }
    pageInfo {
      ...PageInfo
    }
  }
}
    ${UserFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      usersInput: // value for 'usersInput'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;

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