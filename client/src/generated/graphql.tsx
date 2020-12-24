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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
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
  birthday: Scalars['DateTime'];
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
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'avatar' | 'createdAt'>
  ) }
);


export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(data: $registerInput) {
    id
    username
    email
    avatar
    createdAt
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
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;