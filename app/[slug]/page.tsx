import client from '@/graphql/client';
import { TextPage } from '@/graphql/gql/graphql';
import textPageQuery from '@/graphql/queries/textPage.graphql';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data } = await client.query<{ textPage: TextPage }>({
    query: textPageQuery,
    variables: { slug },
  });

  return (
    <div className="prose mx-auto w-full pt-12 md:pt-24 lg:pt-32">
      <div
        dangerouslySetInnerHTML={{ __html: data.textPage?.text.html || '' }}
      />
    </div>
  );
}
