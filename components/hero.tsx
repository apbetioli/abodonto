import { Hero } from '@/graphql/gql/graphql';
import Link from 'next/link';
import { Button } from './ui/button';

export default function HeroComponent({ hero }: { hero: Hero }) {
  return (
    <section className="relative w-full h-screen flex items-end justify-center text-white">
      <video
        className="h-full w-full object-cover"
        src={hero.video.url}
        aria-label={
          hero.video.altText
            ? hero.video.altText
            : 'vídeo do Dr. Anderson Betioli'
        }
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-gray-50/5"></div>
      <div className="absolute flex flex-col justify-center space-y-4 items-center text-center pb-12 xl:pb-32 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {hero.title}
          </h1>
          <p className="max-w-[600px] md:text-xl">{hero.text}</p>
        </div>
        <div className="w-full flex flex-col justify-center gap-2 min-[400px] sm:flex-row ">
          {hero.buttons.map(
            (button: {
              text: string;
              url: string;
              variant: 'default' | 'outline';
            }) => (
              <Link href={button.url} key={button.text}>
                <Button
                  className="w-full sm:w-fit max-w-sm"
                  variant={button.variant}
                >
                  {button.text}
                </Button>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
