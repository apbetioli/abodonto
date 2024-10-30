import About from '@/components/about';
import Hero from '@/components/hero';
import Reviews from '@/components/reviews';
import Services from '@/components/services';
import client from '@/graphql/client';
import type { Pagina } from '@/graphql/gql/graphql';
import pageQuery from '@/graphql/queries/page.graphql';

export default async function HomePage() {
  const { data } = await client.query<{ pagina: Pagina }>({
    query: pageQuery,
    variables: {
      slug: 'home',
    },
  });

  const { hero, cards, reviews } = data.pagina;

  return (
    <main className="flex-1">
      <Hero hero={hero!} />
      <Services cards={cards} />
      <About />
      <Reviews reviews={reviews} />
    </main>
  );
}
