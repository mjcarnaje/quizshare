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
  question_id: Scalars['String'];
  question: Scalars['String'];
  question_photo?: Maybe<Scalars['String']>;
  choices: Array<Scalars['JSONObject']>;
  answer: Scalars['String'];
  explanation?: Maybe<Scalars['String']>;
  with_explanation: Scalars['Boolean'];
  hint?: Maybe<Scalars['String']>;
  with_hint: Scalars['Boolean'];
};


export type Like = {
  __typename?: 'Like';
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
  country?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  social?: Maybe<Scalars['JSONObject']>;
  name: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  id: Scalars['ID'];
  taker: User;
  score: Scalars['Float'];
  current_total_questions: Scalars['Float'];
  answered_at: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
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
  takers: Array<Result>;
  takers_count: Scalars['Int'];
  is_taken: Scalars['Boolean'];
  likes: Array<Like>;
  is_liked: Scalars['Boolean'];
  likes_count: Scalars['Int'];
  comments: Array<Comment>;
  comments_count: Scalars['Int'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  questionsCount: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  quiz_id: Scalars['Float'];
  author: User;
  text: Scalars['String'];
  created_at: Scalars['String'];
};

export type PaginatedQuizzes = {
  __typename?: 'PaginatedQuizzes';
  quizzes: Array<Quiz>;
  hasMore: Scalars['Boolean'];
};

export type PaginatedMeQuizzes = {
  __typename?: 'PaginatedMeQuizzes';
  meQuizzes: Array<Quiz>;
  meHasMore: Scalars['Boolean'];
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  comments: Array<Comment>;
  hasMore: Scalars['Boolean'];
};

export type UsersAnswer = {
  question_id: Scalars['String'];
  choice_id: Scalars['String'];
};

export type ChecksAnswerInput = {
  quiz_id: Scalars['Float'];
  users_answer: Array<UsersAnswer>;
};

export type ChoiceInput = {
  choice_id: Scalars['String'];
  value: Scalars['String'];
  choice_photo?: Maybe<Scalars['String']>;
};

export type QuestionInput = {
  question_id: Scalars['ID'];
  question: Scalars['String'];
  question_photo?: Maybe<Scalars['String']>;
  choices: Array<ChoiceInput>;
  answer: Scalars['String'];
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

export type UpdateAccountInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  confirm_password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  cover_photo?: Maybe<Scalars['String']>;
};

export type SocialInput = {
  facebook: Scalars['String'];
  twitter: Scalars['String'];
  instagram: Scalars['String'];
  youtube: Scalars['String'];
};

export type UpdateProfileInput = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  year: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  social?: Maybe<SocialInput>;
};

export type Query = {
  __typename?: 'Query';
  quizzes: PaginatedQuizzes;
  meQuizzes: PaginatedMeQuizzes;
  searhedQuizzes: Array<Quiz>;
  quizToUpdate: Quiz;
  singleQuiz?: Maybe<Quiz>;
  questions?: Maybe<Array<Question>>;
  comments?: Maybe<PaginatedComments>;
  me?: Maybe<User>;
  getUsers: Array<User>;
};


export type QueryQuizzesArgs = {
  query?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryMeQuizzesArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySearhedQuizzesArgs = {
  query: Scalars['String'];
};


export type QueryQuizToUpdateArgs = {
  quiz_id: Scalars['Int'];
};


export type QuerySingleQuizArgs = {
  quiz_id: Scalars['Int'];
};


export type QueryQuestionsArgs = {
  quiz_id: Scalars['Int'];
};


export type QueryCommentsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  quiz_id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkAnswer?: Maybe<Result>;
  createComment: Comment;
  createQuiz: Quiz;
  deleteComment: Scalars['String'];
  deleteQuiz: Scalars['String'];
  toggleLike: Scalars['String'];
  updateQuiz: Quiz;
  deleteUser: Scalars['String'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register: User;
  updateAccount: User;
  updateProfile?: Maybe<User>;
};


export type MutationCheckAnswerArgs = {
  data: ChecksAnswerInput;
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
  quiz_id: Scalars['Int'];
};


export type MutationToggleLikeArgs = {
  quiz_id: Scalars['Float'];
};


export type MutationUpdateQuizArgs = {
  inputs: QuizInput;
  quiz_id: Scalars['Float'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateAccountArgs = {
  data: UpdateAccountInput;
};


export type MutationUpdateProfileArgs = {
  data: UpdateProfileInput;
};

export type CommentResponseFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'quiz_id' | 'text' | 'created_at'>
  & { author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'name'>
    ) }
  ) }
);

export type QuizzesResponseFragment = (
  { __typename?: 'Quiz' }
  & Pick<Quiz, 'id' | 'title' | 'description' | 'quiz_photo' | 'created_at' | 'is_liked' | 'likes_count' | 'comments_count' | 'takers_count' | 'questionsCount'>
  & { likes: Array<(
    { __typename?: 'Like' }
    & Pick<Like, 'quiz_id' | 'author_id'>
  )>, author: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'name'>
    ) }
  ) }
);

export type ResultResponseFragment = (
  { __typename?: 'Result' }
  & Pick<Result, 'id' | 'score' | 'current_total_questions' | 'answered_at'>
  & { taker: (
    { __typename?: 'User' }
    & Pick<User, 'username' | 'avatar' | 'email'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'name'>
    ) }
  ) }
);

export type UserResponseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'cover_photo' | 'created_at' | 'updated_at'>
  & { profile: (
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'first_name' | 'last_name' | 'birthday' | 'gender' | 'name' | 'country' | 'bio' | 'social'>
  ) }
);

export type CheckAnswerMutationVariables = Exact<{
  data: ChecksAnswerInput;
}>;


export type CheckAnswerMutation = (
  { __typename?: 'Mutation' }
  & { checkAnswer?: Maybe<(
    { __typename?: 'Result' }
    & ResultResponseFragment
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  text: Scalars['String'];
  quiz_id: Scalars['Float'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & CommentResponseFragment
  ) }
);

export type CreateQuizMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  quiz_photo?: Maybe<Scalars['String']>;
  questions: Array<QuestionInput>;
}>;


export type CreateQuizMutation = (
  { __typename?: 'Mutation' }
  & { createQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'title' | 'description' | 'quiz_photo'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'question_id' | 'question' | 'question_photo' | 'choices' | 'answer' | 'explanation' | 'with_explanation' | 'hint' | 'with_hint'>
    )> }
  ) }
);

export type DeleteQuizMutationVariables = Exact<{
  quiz_id: Scalars['Int'];
}>;


export type DeleteQuizMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteQuiz'>
);

export type LoginMutationVariables = Exact<{
  emailOrUsername: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & UserResponseFragment
  )> }
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
    & UserResponseFragment
  ) }
);

export type ToggleLikeMutationVariables = Exact<{
  quiz_id: Scalars['Float'];
}>;


export type ToggleLikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleLike'>
);

export type UpdateAccountMutationVariables = Exact<{
  data: UpdateAccountInput;
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'User' }
    & UserResponseFragment
  ) }
);

export type UpdateProfileMutationVariables = Exact<{
  data: UpdateProfileInput;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateProfile?: Maybe<(
    { __typename?: 'User' }
    & UserResponseFragment
  )> }
);

export type UpdateQuizMutationVariables = Exact<{
  inputs: QuizInput;
  quiz_id: Scalars['Float'];
}>;


export type UpdateQuizMutation = (
  { __typename?: 'Mutation' }
  & { updateQuiz: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'title' | 'description' | 'quiz_photo'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'question_id' | 'question' | 'question_photo' | 'choices' | 'answer' | 'explanation' | 'with_explanation' | 'hint' | 'with_hint'>
    )> }
  ) }
);

export type CommentsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
  quiz_id: Scalars['Int'];
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments?: Maybe<(
    { __typename?: 'PaginatedComments' }
    & Pick<PaginatedComments, 'hasMore'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & CommentResponseFragment
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserResponseFragment
  )> }
);

export type MeQuizzesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type MeQuizzesQuery = (
  { __typename?: 'Query' }
  & { meQuizzes: (
    { __typename?: 'PaginatedMeQuizzes' }
    & Pick<PaginatedMeQuizzes, 'meHasMore'>
    & { meQuizzes: Array<(
      { __typename?: 'Quiz' }
      & QuizzesResponseFragment
    )> }
  ) }
);

export type QuestionsQueryVariables = Exact<{
  quiz_id: Scalars['Int'];
  withAnswer: Scalars['Boolean'];
}>;


export type QuestionsQuery = (
  { __typename?: 'Query' }
  & { questions?: Maybe<Array<(
    { __typename?: 'Question' }
    & MakeOptional<Pick<Question, 'question_id' | 'question' | 'question_photo' | 'choices' | 'hint' | 'with_hint' | 'answer'>, 'answer'>
  )>> }
);

export type QuizToUpdateQueryVariables = Exact<{
  quiz_id: Scalars['Int'];
}>;


export type QuizToUpdateQuery = (
  { __typename?: 'Query' }
  & { quizToUpdate: (
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'title' | 'description' | 'quiz_photo'>
    & { questions: Array<(
      { __typename?: 'Question' }
      & Pick<Question, 'question_id' | 'question' | 'question_photo' | 'choices' | 'answer' | 'explanation' | 'with_explanation' | 'hint' | 'with_hint'>
    )> }
  ) }
);

export type QuizzesQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
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

export type SingleQuizQueryVariables = Exact<{
  quiz_id: Scalars['Int'];
}>;


export type SingleQuizQuery = (
  { __typename?: 'Query' }
  & { singleQuiz?: Maybe<(
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'quiz_photo' | 'title' | 'description' | 'is_liked' | 'likes_count' | 'comments_count' | 'created_at' | 'questionsCount' | 'takers_count' | 'is_taken'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'avatar' | 'email'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'name'>
      ) }
    ) }
  )> }
);

export const CommentResponseFragmentDoc = gql`
    fragment CommentResponse on Comment {
  id
  quiz_id
  author {
    id
    username
    email
    avatar
    profile {
      name
    }
  }
  text
  created_at
}
    `;
export const QuizzesResponseFragmentDoc = gql`
    fragment QuizzesResponse on Quiz {
  id
  title
  description
  quiz_photo
  created_at
  likes {
    quiz_id
    author_id
  }
  author {
    id
    username
    email
    avatar
    profile {
      name
    }
  }
  is_liked
  likes_count
  comments_count
  takers_count
  questionsCount
}
    `;
export const ResultResponseFragmentDoc = gql`
    fragment ResultResponse on Result {
  id
  taker {
    username
    avatar
    email
    profile {
      name
    }
  }
  score
  current_total_questions
  answered_at
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on User {
  id
  username
  email
  avatar
  cover_photo
  created_at
  updated_at
  profile {
    id
    first_name
    last_name
    birthday
    gender
    name
    country
    bio
    social
  }
}
    `;
export const CheckAnswerDocument = gql`
    mutation CheckAnswer($data: ChecksAnswerInput!) {
  checkAnswer(data: $data) {
    ...ResultResponse
  }
}
    ${ResultResponseFragmentDoc}`;
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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCheckAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CheckAnswerMutation, CheckAnswerMutationVariables>) {
        return Apollo.useMutation<CheckAnswerMutation, CheckAnswerMutationVariables>(CheckAnswerDocument, baseOptions);
      }
export type CheckAnswerMutationHookResult = ReturnType<typeof useCheckAnswerMutation>;
export type CheckAnswerMutationResult = Apollo.MutationResult<CheckAnswerMutation>;
export type CheckAnswerMutationOptions = Apollo.BaseMutationOptions<CheckAnswerMutation, CheckAnswerMutationVariables>;
export const CreateCommentDocument = gql`
    mutation CreateComment($text: String!, $quiz_id: Float!) {
  createComment(text: $text, quiz_id: $quiz_id) {
    ...CommentResponse
  }
}
    ${CommentResponseFragmentDoc}`;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateQuizDocument = gql`
    mutation CreateQuiz($title: String!, $description: String!, $quiz_photo: String, $questions: [QuestionInput!]!) {
  createQuiz(
    data: {title: $title, description: $description, quiz_photo: $quiz_photo, questions: $questions}
  ) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
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
 *      description: // value for 'description'
 *      quiz_photo: // value for 'quiz_photo'
 *      questions: // value for 'questions'
 *   },
 * });
 */
export function useCreateQuizMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuizMutation, CreateQuizMutationVariables>) {
        return Apollo.useMutation<CreateQuizMutation, CreateQuizMutationVariables>(CreateQuizDocument, baseOptions);
      }
export type CreateQuizMutationHookResult = ReturnType<typeof useCreateQuizMutation>;
export type CreateQuizMutationResult = Apollo.MutationResult<CreateQuizMutation>;
export type CreateQuizMutationOptions = Apollo.BaseMutationOptions<CreateQuizMutation, CreateQuizMutationVariables>;
export const DeleteQuizDocument = gql`
    mutation DeleteQuiz($quiz_id: Int!) {
  deleteQuiz(quiz_id: $quiz_id)
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
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useDeleteQuizMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuizMutation, DeleteQuizMutationVariables>) {
        return Apollo.useMutation<DeleteQuizMutation, DeleteQuizMutationVariables>(DeleteQuizDocument, baseOptions);
      }
export type DeleteQuizMutationHookResult = ReturnType<typeof useDeleteQuizMutation>;
export type DeleteQuizMutationResult = Apollo.MutationResult<DeleteQuizMutation>;
export type DeleteQuizMutationOptions = Apollo.BaseMutationOptions<DeleteQuizMutation, DeleteQuizMutationVariables>;
export const LoginDocument = gql`
    mutation Login($emailOrUsername: String!, $password: String!) {
  login(data: {emailOrUsername: $emailOrUsername, password: $password}) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
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
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
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
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($data: UpdateAccountInput!) {
  updateAccount(data: $data) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($data: UpdateProfileInput!) {
  updateProfile(data: $data) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, baseOptions);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateQuizDocument = gql`
    mutation UpdateQuiz($inputs: QuizInput!, $quiz_id: Float!) {
  updateQuiz(inputs: $inputs, quiz_id: $quiz_id) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
  }
}
    `;
export type UpdateQuizMutationFn = Apollo.MutationFunction<UpdateQuizMutation, UpdateQuizMutationVariables>;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useUpdateQuizMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuizMutation, UpdateQuizMutationVariables>) {
        return Apollo.useMutation<UpdateQuizMutation, UpdateQuizMutationVariables>(UpdateQuizDocument, baseOptions);
      }
export type UpdateQuizMutationHookResult = ReturnType<typeof useUpdateQuizMutation>;
export type UpdateQuizMutationResult = Apollo.MutationResult<UpdateQuizMutation>;
export type UpdateQuizMutationOptions = Apollo.BaseMutationOptions<UpdateQuizMutation, UpdateQuizMutationVariables>;
export const CommentsDocument = gql`
    query Comments($limit: Int!, $cursor: String, $quiz_id: Int!) {
  comments(limit: $limit, cursor: $cursor, quiz_id: $quiz_id) {
    hasMore
    comments {
      ...CommentResponse
    }
  }
}
    ${CommentResponseFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserResponse
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
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeQuizzesDocument = gql`
    query MeQuizzes($limit: Int!, $cursor: String) {
  meQuizzes(limit: $limit, cursor: $cursor) {
    meHasMore
    meQuizzes {
      ...QuizzesResponse
    }
  }
}
    ${QuizzesResponseFragmentDoc}`;

/**
 * __useMeQuizzesQuery__
 *
 * To run a query within a React component, call `useMeQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuizzesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useMeQuizzesQuery(baseOptions: Apollo.QueryHookOptions<MeQuizzesQuery, MeQuizzesQueryVariables>) {
        return Apollo.useQuery<MeQuizzesQuery, MeQuizzesQueryVariables>(MeQuizzesDocument, baseOptions);
      }
export function useMeQuizzesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuizzesQuery, MeQuizzesQueryVariables>) {
          return Apollo.useLazyQuery<MeQuizzesQuery, MeQuizzesQueryVariables>(MeQuizzesDocument, baseOptions);
        }
export type MeQuizzesQueryHookResult = ReturnType<typeof useMeQuizzesQuery>;
export type MeQuizzesLazyQueryHookResult = ReturnType<typeof useMeQuizzesLazyQuery>;
export type MeQuizzesQueryResult = Apollo.QueryResult<MeQuizzesQuery, MeQuizzesQueryVariables>;
export const QuestionsDocument = gql`
    query Questions($quiz_id: Int!, $withAnswer: Boolean!) {
  questions(quiz_id: $quiz_id) {
    question_id
    question
    question_photo
    choices
    hint
    with_hint
    answer @include(if: $withAnswer)
  }
}
    `;

/**
 * __useQuestionsQuery__
 *
 * To run a query within a React component, call `useQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *      withAnswer: // value for 'withAnswer'
 *   },
 * });
 */
export function useQuestionsQuery(baseOptions: Apollo.QueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
        return Apollo.useQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, baseOptions);
      }
export function useQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionsQuery, QuestionsQueryVariables>) {
          return Apollo.useLazyQuery<QuestionsQuery, QuestionsQueryVariables>(QuestionsDocument, baseOptions);
        }
export type QuestionsQueryHookResult = ReturnType<typeof useQuestionsQuery>;
export type QuestionsLazyQueryHookResult = ReturnType<typeof useQuestionsLazyQuery>;
export type QuestionsQueryResult = Apollo.QueryResult<QuestionsQuery, QuestionsQueryVariables>;
export const QuizToUpdateDocument = gql`
    query QuizToUpdate($quiz_id: Int!) {
  quizToUpdate(quiz_id: $quiz_id) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
  }
}
    `;

/**
 * __useQuizToUpdateQuery__
 *
 * To run a query within a React component, call `useQuizToUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizToUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizToUpdateQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useQuizToUpdateQuery(baseOptions: Apollo.QueryHookOptions<QuizToUpdateQuery, QuizToUpdateQueryVariables>) {
        return Apollo.useQuery<QuizToUpdateQuery, QuizToUpdateQueryVariables>(QuizToUpdateDocument, baseOptions);
      }
export function useQuizToUpdateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuizToUpdateQuery, QuizToUpdateQueryVariables>) {
          return Apollo.useLazyQuery<QuizToUpdateQuery, QuizToUpdateQueryVariables>(QuizToUpdateDocument, baseOptions);
        }
export type QuizToUpdateQueryHookResult = ReturnType<typeof useQuizToUpdateQuery>;
export type QuizToUpdateLazyQueryHookResult = ReturnType<typeof useQuizToUpdateLazyQuery>;
export type QuizToUpdateQueryResult = Apollo.QueryResult<QuizToUpdateQuery, QuizToUpdateQueryVariables>;
export const QuizzesDocument = gql`
    query Quizzes($limit: Int!, $cursor: String, $query: String) {
  quizzes(limit: $limit, cursor: $cursor, query: $query) {
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
 *      query: // value for 'query'
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
export const SingleQuizDocument = gql`
    query SingleQuiz($quiz_id: Int!) {
  singleQuiz(quiz_id: $quiz_id) {
    id
    quiz_photo
    title
    description
    author {
      id
      username
      avatar
      email
      profile {
        name
      }
    }
    is_liked
    likes_count
    comments_count
    created_at
    questionsCount
    takers_count
    is_taken
  }
}
    `;

/**
 * __useSingleQuizQuery__
 *
 * To run a query within a React component, call `useSingleQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleQuizQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
export function useSingleQuizQuery(baseOptions: Apollo.QueryHookOptions<SingleQuizQuery, SingleQuizQueryVariables>) {
        return Apollo.useQuery<SingleQuizQuery, SingleQuizQueryVariables>(SingleQuizDocument, baseOptions);
      }
export function useSingleQuizLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleQuizQuery, SingleQuizQueryVariables>) {
          return Apollo.useLazyQuery<SingleQuizQuery, SingleQuizQueryVariables>(SingleQuizDocument, baseOptions);
        }
export type SingleQuizQueryHookResult = ReturnType<typeof useSingleQuizQuery>;
export type SingleQuizLazyQueryHookResult = ReturnType<typeof useSingleQuizLazyQuery>;
export type SingleQuizQueryResult = Apollo.QueryResult<SingleQuizQuery, SingleQuizQueryVariables>;