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
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type ChangeRoleInput = {
  userId: Scalars['String'];
  newRole: UserRole;
};

export type ChoiceInput = {
  id: Scalars['String'];
  text: Scalars['String'];
  choicePhoto?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['String'];
  text: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  quizId: Scalars['String'];
  authorId: Scalars['String'];
  author: User;
  isMine: Scalars['Boolean'];
};

export type GetQuizzesInput = {
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
};

export type GetTakersInput = {
  search?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  signIn?: Maybe<User>;
  logout: Scalars['Boolean'];
  addComment: Comment;
  editComment: Comment;
  deleteComment: Scalars['Boolean'];
  createQuiz: Quiz;
  saveQuiz: Quiz;
  deleteQuiz: Scalars['Boolean'];
  publishQuiz: Quiz;
  toggleLike: Quiz;
  toggleBookmark: Quiz;
  submitAnswers: ScoreResult;
  changeRole: User;
  toggleFollow: User;
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


export type MutationCreateQuizArgs = {
  title: Scalars['String'];
};


export type MutationSaveQuizArgs = {
  input: QuizInput;
  quizId: Scalars['String'];
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


export type MutationSubmitAnswersArgs = {
  input: SubmitAnswersInput;
};


export type MutationChangeRoleArgs = {
  changeRoleInput: ChangeRoleInput;
};


export type MutationToggleFollowArgs = {
  userId: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
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

export type PaginatedTakers = {
  __typename?: 'PaginatedTakers';
  takers: Array<Score>;
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
  getMeQuizzes: PaginatedQuizzes;
  getQuizzes: PaginatedQuizzes;
  getQuiz: Quiz;
  getQuizInput: Quiz;
  getQuizTake: Quiz;
  getTakers: PaginatedTakers;
  users: PaginatedUsers;
  me?: Maybe<User>;
};


export type QueryGetCommentsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Float'];
  quizId: Scalars['String'];
};


export type QueryGetMeQuizzesArgs = {
  input: GetQuizzesInput;
};


export type QueryGetQuizzesArgs = {
  input: GetQuizzesInput;
};


export type QueryGetQuizArgs = {
  quizId: Scalars['String'];
};


export type QueryGetQuizInputArgs = {
  quizId: Scalars['String'];
};


export type QueryGetQuizTakeArgs = {
  quizId: Scalars['String'];
};


export type QueryGetTakersArgs = {
  quizId: Scalars['String'];
  input: GetTakersInput;
};


export type QueryUsersArgs = {
  input: UsersInput;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
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
  description?: Maybe<Scalars['String']>;
  quizPhoto?: Maybe<Scalars['String']>;
  questions: Array<Question>;
  results: Array<Result>;
  tags: Array<Tag>;
  isPublished: Scalars['Boolean'];
  questionCount: Scalars['Int'];
  likeCount: Scalars['Int'];
  commentCount: Scalars['Int'];
  bookmarkCount: Scalars['Int'];
  takerCount: Scalars['Int'];
  isMine: Scalars['Boolean'];
  isLiked: Scalars['Boolean'];
  isBookmarked: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type QuizInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  quizPhoto?: Maybe<Scalars['String']>;
  questions: Array<QuestionInput>;
  results: Array<ResultInput>;
  tags: Array<TagInput>;
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['ID'];
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

export type Score = {
  __typename?: 'Score';
  id: Scalars['ID'];
  totalItems: Scalars['Int'];
  score: Scalars['Int'];
  percentage: Scalars['Float'];
  answered: Scalars['Timestamp'];
  authorId: Scalars['String'];
  quizId: Scalars['String'];
  takerId: Scalars['String'];
  taker: User;
};

export type ScoreResult = {
  __typename?: 'ScoreResult';
  id: Scalars['String'];
  score: ScoreResultScore;
  result?: Maybe<ScoreResultResult>;
};

export type ScoreResultResult = {
  __typename?: 'ScoreResultResult';
  title: Scalars['String'];
  description: Scalars['String'];
  resultPhoto?: Maybe<Scalars['String']>;
  minimumPercent: Scalars['Int'];
};

export type ScoreResultScore = {
  __typename?: 'ScoreResultScore';
  score: Scalars['Int'];
  totalItems: Scalars['Int'];
  percentage: Scalars['Float'];
  answered: Scalars['String'];
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

export type SubmitAnswersInput = {
  quizId: Scalars['String'];
  answers: Scalars['JSONObject'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  tagPhoto?: Maybe<Scalars['String']>;
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
  createdAt: Scalars['Timestamp'];
  updatedAt: Scalars['Timestamp'];
  isFollowed: Scalars['Boolean'];
};

export enum UserRole {
  SuperAdmin = 'SUPER_ADMIN',
  Admin = 'ADMIN',
  User = 'USER',
  Visitor = 'VISITOR'
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
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'createdAt' | 'questionCount' | 'isPublished' | 'isMine' | 'likeCount' | 'bookmarkCount' | 'commentCount' | 'takerCount' | 'isLiked' | 'isBookmarked' | 'authorId'>
  & { author: (
    { __typename?: 'User' }
    & AuthorFragment
  ) }
);

export type ResultFragment = (
  { __typename?: 'Result' }
  & Pick<Result, 'id' | 'title' | 'description' | 'resultPhoto' | 'minimumPercent'>
);

export type ScoreResultFragment = (
  { __typename?: 'ScoreResult' }
  & Pick<ScoreResult, 'id'>
  & { score: (
    { __typename?: 'ScoreResultScore' }
    & Pick<ScoreResultScore, 'score' | 'totalItems' | 'percentage' | 'answered'>
  ), result?: Maybe<(
    { __typename?: 'ScoreResultResult' }
    & Pick<ScoreResultResult, 'title' | 'description' | 'resultPhoto' | 'minimumPercent'>
  )> }
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

export type CreateQuizMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id'>
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
    & Pick<Quiz, 'id' | 'isPublished'>
  ) }
);

export type SaveQuizMutationVariables = Exact<{
  input: QuizInput;
  quizId: Scalars['String'];
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

export type SubmitAnswersMutationVariables = Exact<{
  input: SubmitAnswersInput;
}>;


export type SubmitAnswersMutation = (
  { __typename?: 'Mutation' }
  & { submitAnswers: (
    { __typename?: 'ScoreResult' }
    & ScoreResultFragment
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

export type ToggleFollowMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ToggleFollowMutation = (
  { __typename?: 'Mutation' }
  & { toggleFollow: (
    { __typename?: 'User' }
    & AuthorFragment
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

export type GetMeQuizzesQueryVariables = Exact<{
  input: GetQuizzesInput;
}>;


export type GetMeQuizzesQuery = (
  { __typename?: 'Query' }
  & { getMeQuizzes: (
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

export type GetQuizQueryVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type GetQuizQuery = (
  { __typename?: 'Query' }
  & { getQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'isLiked' | 'isBookmarked' | 'questionCount' | 'likeCount' | 'commentCount' | 'takerCount' | 'isPublished' | 'authorId' | 'createdAt' | 'updatedAt'>
    & { tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>, author: (
      { __typename?: 'User' }
      & AuthorFragment
    ) }
  ) }
);

export type GetQuizInputQueryVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type GetQuizInputQuery = (
  { __typename?: 'Query' }
  & { getQuizInput: (
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

export type GetQuizTakeQueryVariables = Exact<{
  quizId: Scalars['String'];
}>;


export type GetQuizTakeQuery = (
  { __typename?: 'Query' }
  & { getQuizTake: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'title' | 'description' | 'quizPhoto' | 'commentCount' | 'questionCount' | 'authorId' | 'createdAt' | 'updatedAt'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & QuestionFragment
    )>, tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>, author: (
      { __typename?: 'User' }
      & AuthorFragment
    ) }
  ) }
);

export type GetQuizzesQueryVariables = Exact<{
  input: GetQuizzesInput;
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
  input: UsersInput;
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
  takerCount
  isLiked
  isBookmarked
  authorId
  author {
    ...Author
  }
}
    ${AuthorFragmentDoc}`;
export const ScoreResultFragmentDoc = gql`
    fragment ScoreResult on ScoreResult {
  id
  score {
    score
    totalItems
    percentage
    answered
  }
  result {
    title
    description
    resultPhoto
    minimumPercent
  }
}
    `;
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
export const CreateQuizDocument = gql`
    mutation CreateQuiz($title: String!) {
  createQuiz(title: $title) {
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
 *      title: // value for 'title'
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
    isPublished
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
    mutation SaveQuiz($input: QuizInput!, $quizId: String!) {
  saveQuiz(input: $input, quizId: $quizId) {
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
 *      input: // value for 'input'
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
export const SubmitAnswersDocument = gql`
    mutation SubmitAnswers($input: SubmitAnswersInput!) {
  submitAnswers(input: $input) {
    ...ScoreResult
  }
}
    ${ScoreResultFragmentDoc}`;
export type SubmitAnswersMutationFn = Apollo.MutationFunction<SubmitAnswersMutation, SubmitAnswersMutationVariables>;

/**
 * __useSubmitAnswersMutation__
 *
 * To run a mutation, you first call `useSubmitAnswersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitAnswersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitAnswersMutation, { data, loading, error }] = useSubmitAnswersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitAnswersMutation(baseOptions?: Apollo.MutationHookOptions<SubmitAnswersMutation, SubmitAnswersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitAnswersMutation, SubmitAnswersMutationVariables>(SubmitAnswersDocument, options);
      }
export type SubmitAnswersMutationHookResult = ReturnType<typeof useSubmitAnswersMutation>;
export type SubmitAnswersMutationResult = Apollo.MutationResult<SubmitAnswersMutation>;
export type SubmitAnswersMutationOptions = Apollo.BaseMutationOptions<SubmitAnswersMutation, SubmitAnswersMutationVariables>;
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
export const ToggleFollowDocument = gql`
    mutation ToggleFollow($userId: String!) {
  toggleFollow(userId: $userId) {
    ...Author
  }
}
    ${AuthorFragmentDoc}`;
export type ToggleFollowMutationFn = Apollo.MutationFunction<ToggleFollowMutation, ToggleFollowMutationVariables>;

/**
 * __useToggleFollowMutation__
 *
 * To run a mutation, you first call `useToggleFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFollowMutation, { data, loading, error }] = useToggleFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useToggleFollowMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFollowMutation, ToggleFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFollowMutation, ToggleFollowMutationVariables>(ToggleFollowDocument, options);
      }
export type ToggleFollowMutationHookResult = ReturnType<typeof useToggleFollowMutation>;
export type ToggleFollowMutationResult = Apollo.MutationResult<ToggleFollowMutation>;
export type ToggleFollowMutationOptions = Apollo.BaseMutationOptions<ToggleFollowMutation, ToggleFollowMutationVariables>;
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
export const GetMeQuizzesDocument = gql`
    query GetMeQuizzes($input: GetQuizzesInput!) {
  getMeQuizzes(input: $input) {
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
 * __useGetMeQuizzesQuery__
 *
 * To run a query within a React component, call `useGetMeQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuizzesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMeQuizzesQuery(baseOptions: Apollo.QueryHookOptions<GetMeQuizzesQuery, GetMeQuizzesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuizzesQuery, GetMeQuizzesQueryVariables>(GetMeQuizzesDocument, options);
      }
export function useGetMeQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuizzesQuery, GetMeQuizzesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuizzesQuery, GetMeQuizzesQueryVariables>(GetMeQuizzesDocument, options);
        }
export type GetMeQuizzesQueryHookResult = ReturnType<typeof useGetMeQuizzesQuery>;
export type GetMeQuizzesLazyQueryHookResult = ReturnType<typeof useGetMeQuizzesLazyQuery>;
export type GetMeQuizzesQueryResult = Apollo.QueryResult<GetMeQuizzesQuery, GetMeQuizzesQueryVariables>;
export const GetQuizDocument = gql`
    query GetQuiz($quizId: String!) {
  getQuiz(quizId: $quizId) {
    id
    title
    description
    quizPhoto
    tags {
      id
      name
    }
    isLiked
    isBookmarked
    questionCount
    likeCount
    commentCount
    takerCount
    isPublished
    authorId
    author {
      ...Author
    }
    createdAt
    updatedAt
  }
}
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
export const GetQuizInputDocument = gql`
    query GetQuizInput($quizId: String!) {
  getQuizInput(quizId: $quizId) {
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

/**
 * __useGetQuizInputQuery__
 *
 * To run a query within a React component, call `useGetQuizInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizInputQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useGetQuizInputQuery(baseOptions: Apollo.QueryHookOptions<GetQuizInputQuery, GetQuizInputQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizInputQuery, GetQuizInputQueryVariables>(GetQuizInputDocument, options);
      }
export function useGetQuizInputLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizInputQuery, GetQuizInputQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizInputQuery, GetQuizInputQueryVariables>(GetQuizInputDocument, options);
        }
export type GetQuizInputQueryHookResult = ReturnType<typeof useGetQuizInputQuery>;
export type GetQuizInputLazyQueryHookResult = ReturnType<typeof useGetQuizInputLazyQuery>;
export type GetQuizInputQueryResult = Apollo.QueryResult<GetQuizInputQuery, GetQuizInputQueryVariables>;
export const GetQuizTakeDocument = gql`
    query GetQuizTake($quizId: String!) {
  getQuizTake(quizId: $quizId) {
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
    commentCount
    questionCount
    authorId
    author {
      ...Author
    }
    createdAt
    updatedAt
  }
}
    ${QuestionFragmentDoc}
${AuthorFragmentDoc}`;

/**
 * __useGetQuizTakeQuery__
 *
 * To run a query within a React component, call `useGetQuizTakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizTakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizTakeQuery({
 *   variables: {
 *      quizId: // value for 'quizId'
 *   },
 * });
 */
export function useGetQuizTakeQuery(baseOptions: Apollo.QueryHookOptions<GetQuizTakeQuery, GetQuizTakeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuizTakeQuery, GetQuizTakeQueryVariables>(GetQuizTakeDocument, options);
      }
export function useGetQuizTakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuizTakeQuery, GetQuizTakeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuizTakeQuery, GetQuizTakeQueryVariables>(GetQuizTakeDocument, options);
        }
export type GetQuizTakeQueryHookResult = ReturnType<typeof useGetQuizTakeQuery>;
export type GetQuizTakeLazyQueryHookResult = ReturnType<typeof useGetQuizTakeLazyQuery>;
export type GetQuizTakeQueryResult = Apollo.QueryResult<GetQuizTakeQuery, GetQuizTakeQueryVariables>;
export const GetQuizzesDocument = gql`
    query GetQuizzes($input: GetQuizzesInput!) {
  getQuizzes(input: $input) {
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
 *      input: // value for 'input'
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
    query getUsers($input: UsersInput!) {
  users(input: $input) {
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
 *      input: // value for 'input'
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