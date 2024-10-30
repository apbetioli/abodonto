import type { Review as ReviewType } from '@/graphql/gql/graphql';
import Review from './review';

export default function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
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
            reviews.map((review: ReviewType) => (
              <Review key={review.patientName} review={review} />
            ))}
        </div>
      </div>
    </section>
  );
}
