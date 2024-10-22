/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'query Menus {\n  menus(first: 1) {\n    logo {\n      url\n      width\n      height\n    }\n    links {\n      texto\n      url\n    }\n  }\n}':
    types.MenusDocument,
  'query Page($slug: String!) {\n  pagina(where: {slug: $slug}) {\n    hero {\n      title\n      text\n      buttons {\n        text\n        url\n        variant\n      }\n      video {\n        url\n        altText\n      }\n    }\n    cards {\n      ... on Card {\n        button {\n          text\n          url\n          variant\n        }\n        listItems\n        text\n        title\n        icon\n        image {\n          url\n          altText\n        }\n      }\n    }\n    reviews {\n      ... on Review {\n        patientName\n        text\n      }\n    }\n  }\n}':
    types.PageDocument,
  'query TextPage($slug: String!) {\n  textPage(where: {slug: $slug}) {\n    text {\n      html\n    }\n  }\n}':
    types.TextPageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Menus {\n  menus(first: 1) {\n    logo {\n      url\n      width\n      height\n    }\n    links {\n      texto\n      url\n    }\n  }\n}',
): (typeof documents)['query Menus {\n  menus(first: 1) {\n    logo {\n      url\n      width\n      height\n    }\n    links {\n      texto\n      url\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Page($slug: String!) {\n  pagina(where: {slug: $slug}) {\n    hero {\n      title\n      text\n      buttons {\n        text\n        url\n        variant\n      }\n      video {\n        url\n        altText\n      }\n    }\n    cards {\n      ... on Card {\n        button {\n          text\n          url\n          variant\n        }\n        listItems\n        text\n        title\n        icon\n        image {\n          url\n          altText\n        }\n      }\n    }\n    reviews {\n      ... on Review {\n        patientName\n        text\n      }\n    }\n  }\n}',
): (typeof documents)['query Page($slug: String!) {\n  pagina(where: {slug: $slug}) {\n    hero {\n      title\n      text\n      buttons {\n        text\n        url\n        variant\n      }\n      video {\n        url\n        altText\n      }\n    }\n    cards {\n      ... on Card {\n        button {\n          text\n          url\n          variant\n        }\n        listItems\n        text\n        title\n        icon\n        image {\n          url\n          altText\n        }\n      }\n    }\n    reviews {\n      ... on Review {\n        patientName\n        text\n      }\n    }\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query TextPage($slug: String!) {\n  textPage(where: {slug: $slug}) {\n    text {\n      html\n    }\n  }\n}',
): (typeof documents)['query TextPage($slug: String!) {\n  textPage(where: {slug: $slug}) {\n    text {\n      html\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
