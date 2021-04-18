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


export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  signIn?: Maybe<User>;
  logout: Scalars['Boolean'];
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationSignInArgs = {
  SignInInput: SignInInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type SignInInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
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

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  googleId?: Maybe<Scalars['String']>;
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
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponseFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'googleId' | 'username' | 'email' | 'avatar' | 'coverPhoto' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'country' | 'bio' | 'social' | 'createdAt' | 'updatedAt'>
);

export type SignInMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'googleId' | 'username' | 'email' | 'avatar' | 'coverPhoto' | 'firstName' | 'lastName' | 'birthday' | 'gender' | 'country' | 'bio' | 'social' | 'createdAt' | 'updatedAt'>
  )> }
);

export const UserResponseFragmentDoc = gql`
    fragment userResponse on User {
  id
  googleId
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
export const SignInDocument = gql`
    mutation SignIn($usernameOrEmail: String!, $password: String!) {
  signIn(SignInInput: {usernameOrEmail: $usernameOrEmail, password: $password}) {
    id
    googleId
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
}
    `;
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