import { Card, Icons } from '@/graphql/gql/graphql';
import LazyLoaderObserver from './ui/LazyLoadObserver';
import Image from 'next/image';
import Link from 'next/link';
import { DrillIcon, Scissors, Smile, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export default function CardComponent({ card }: { card: Card }) {
  const icons = {
    [Icons.DrillIcon]: DrillIcon,
    [Icons.Scissors]: Scissors,
    [Icons.Smile]: Smile,
    [Icons.Sparkles]: Sparkles,
  };

  const IconComponent = icons[card.icon as Icons];

  return (
    <section className="w-full py-12 text-[#be955f] md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-2 md:gap-12">
          <Image
            alt={card.image.altText ? card.image.altText : 'foto de dentes'}
            className="aspect-square w-full rounded-xl object-cover"
            height={400}
            src={card.image.url}
            width={400}
          />
          <LazyLoaderObserver>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {IconComponent && (
                    <IconComponent
                      aria-hidden="true"
                      className="h-6 w-6 text-[#be955f]"
                    />
                  )}
                  <h3 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-2xl font-bold text-transparent">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400">{card.text}</p>
              </div>
              <ul className="list-disc space-y-2 pl-4 text-gray-400">
                {card.listItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre implantes"
                className="flex justify-center sm:justify-start"
              >
                {card.button && (
                  <Button
                    className="w-full max-w-sm sm:w-fit"
                    variant={card.button.variant}
                  >
                    {card.button.text}
                  </Button>
                )}
              </Link>
            </div>
          </LazyLoaderObserver>
        </div>
      </div>
    </section>
  );
}
