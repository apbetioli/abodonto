import { CardContent, Icons } from '@/gql/graphql';
import LazyLoaderObserver from './ui/LazyLoadObserver';
import Image from 'next/image';
import Link from 'next/link';
import { DrillIcon, Scissors, Smile, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function CardComponent({ card }: { card: CardContent }) {
  const icons = {
    [Icons.DrillIcon]: DrillIcon,
    [Icons.Scissors]: Scissors,
    [Icons.Smile]: Smile,
    [Icons.Sparkles]: Sparkles,
  };

  const IconComponent = icons[card.icon as Icons];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-[#be955f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center justify-items-center">
          <Image
            alt="Procedimento de implante dentário"
            className="rounded-xl w-full aspect-square object-cover"
            height="400"
            src={card.image.url}
            width="400"
          />
          <LazyLoaderObserver>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  {IconComponent && (
                    <IconComponent className="w-6 h-6 text-[#be955f]" />
                  )}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#be955f] to-[#e2c08d]">
                    {card.titulo}
                  </h3>
                </div>
                <p className="text-gray-400">{card.texto}</p>
              </div>
              <ul className="space-y-2 text-gray-400 list-disc pl-4">
                {card.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <Link
                href="https://wa.me/5544997381613?text=Olá, gostaria de saber mais sobre implantes"
                className="flex justify-center sm:justify-start"
              >
                <Button
                  className="w-full sm:w-fit max-w-sm"
                  variant={card.button.variant}
                >
                  {card.button.text}
                </Button>
              </Link>
            </div>
          </LazyLoaderObserver>
        </div>
      </div>
    </section>
  );
}
