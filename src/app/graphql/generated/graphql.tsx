import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Buffer scalar type */
  Buffer: any;
  /** UUID scalar type */
  UUID: any;
};

export type File = {
  __typename?: 'File';
  data: Scalars['Buffer'];
  mimeType: Scalars['String'];
  nid: Scalars['String'];
};

export type GameProfile = {
  __typename?: 'GameProfile';
  capeId: Scalars['String'];
  nickname: Scalars['String'];
  nicknameChangedAt: Scalars['Float'];
  skinId: Scalars['String'];
  slim: Scalars['Boolean'];
  uuid: Scalars['UUID'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
};

export type Role = {
  __typename?: 'Role';
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  coinsChanged: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  nid: Scalars['String'];
  profile: UserProfile;
  username: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  avatar: File;
  capePack: Array<File>;
  coins: Scalars['Float'];
  gameProfiles: Array<GameProfile>;
  roles: Array<Role>;
  skinPack: Array<File>;
  violations: Array<UserViolation>;
};

export type UserViolation = {
  __typename?: 'UserViolation';
  code: Scalars['Float'];
  description: Scalars['String'];
  issuedBy: User;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', nid: string, username: string, verified: boolean, profile: { __typename?: 'UserProfile', coins: number, avatar: { __typename?: 'File', data: any, mimeType: string }, violations: Array<{ __typename?: 'UserViolation', code: number, description: string, issuedBy: { __typename?: 'User', username: string } }>, roles: Array<{ __typename?: 'Role', name: string, permissions: Array<string> }>, gameProfiles: Array<{ __typename?: 'GameProfile', nickname: string, uuid: any, nicknameChangedAt: number, skinId: string, capeId: string, slim: boolean }> } } };


export const MeDocument = gql`
    query Me {
  me {
    nid
    username
    verified
    profile {
      avatar {
        data
        mimeType
      }
      coins
      violations {
        code
        description
        issuedBy {
          username
        }
      }
      roles {
        name
        permissions
      }
      gameProfiles {
        nickname
        uuid
        nicknameChangedAt
        skinId
        capeId
        slim
      }
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