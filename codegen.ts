import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_CONTENT_ENDPOINT,
  documents: 'graphql/queries/*.graphql',
  generates: {
    'graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
