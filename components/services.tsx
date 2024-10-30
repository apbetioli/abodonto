import type { Card as CardType } from '@/graphql/gql/graphql';
import Card from './card';

export default function Services({ cards }: { cards: CardType[] }) {
  return (
    <>
      <section
        id="servicos"
        className="w-full bg-black py-12 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
                Nossos Serviços
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Oferecemos uma ampla gama de serviços odontológicos para
                melhorar seu sorriso e manter sua saúde bucal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {cards &&
        cards.map((card: CardType) => <Card key={card.title} card={card} />)}
    </>
  );
}
