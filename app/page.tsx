import Hero from '@/components/Hero';
import { Card, Review } from '@/graphql/gql/graphql';
import { Button } from '@/components/ui/Button';
import client from '@/graphql/client';
import { Pagina } from '@/graphql/gql/graphql';
import pageQuery from '@/graphql/queries/page.graphql';
import { Clock, Shield, Star } from 'lucide-react';
import Link from 'next/link';
import CardComponent from '@/components/Card';
import ReviewComponent from '@/components/Review';

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
      {hero && <Hero hero={hero} />}

      {/* servicos */}
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

      {/* image cards */}
      {cards &&
        cards.map((card: Card) => (
          <CardComponent key={card.title} card={card} />
        ))}

      {/* sobre */}
      <section
        id="sobre"
        className="w-full bg-black py-12 text-[#be955f] md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
                Por Que Nos Escolher?
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Combinamos tecnologia de ponta com atendimento compassivo para
                proporcionar a melhor experiência odontológica possível.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <Shield
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-[#be955f]"
              />
              <h3 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-center text-xl font-bold text-transparent">
                Tecnologia Avançada
              </h3>
              <p className="text-center text-sm text-gray-400">
                Equipamentos de última geração para diagnósticos precisos e
                tratamentos confortáveis.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Clock
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-[#be955f]"
              />
              <h3 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-center text-xl font-bold text-transparent">
                Horários Convenientes
              </h3>
              <p className="text-center text-sm text-gray-400">
                Agendamento flexível para se adequar ao seu estilo de vida
                agitado, incluindo consultas noturnas e aos fins de semana.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Star
                aria-hidden="true"
                className="mx-auto h-12 w-12 text-[#be955f]"
              />
              <h3 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-center text-xl font-bold text-transparent">
                Equipe Especializada
              </h3>
              <p className="text-center text-sm text-gray-400">
                Profissionais altamente qualificados e experientes dedicados à
                sua saúde bucal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="w-full bg-white py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl">
                O Que Nossos Pacientes Dizem
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Não acredite apenas em nossas palavras. Veja o que nossos
                pacientes satisfeitos têm a dizer sobre sua experiência conosco.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {reviews &&
              reviews.map((review: Review) => (
                <ReviewComponent key={review.patientName} review={review} />
              ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section
        id="contato"
        className="w-full bg-black py-12 text-[#be955f] md:py-24 lg:py-32"
      >
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-3xl font-bold tracking-tighter text-transparent md:text-4xl/tight">
              Pronto para o Seu Melhor Sorriso?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Agende sua consulta hoje e dê o primeiro passo em direção a um
              sorriso mais saudável e confiante.
            </p>
          </div>
          <Link
            href="https://wa.me/5544997381613?text=Olá, gostaria de agendar uma consulta"
            className="flex justify-center"
          >
            <Button className="w-full max-w-sm sm:w-fit" type="submit">
              Agendar consulta
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
