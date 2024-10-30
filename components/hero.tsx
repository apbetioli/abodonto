import type { Hero as HeroType } from '@/graphql/gql/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Hero({ hero }: { hero: HeroType }) {
  return (
    <section className="relative flex h-screen w-full items-end justify-center text-white">
      <video
        className="hidden h-full w-full object-cover sm:block"
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
      <Image
        className="block h-full w-full object-cover pt-14 sm:hidden"
        src={'/ander.jpg'}
        alt={'Dr. Anderson Betioli smiling'}
        width={1440}
        height={1590}
      />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-gray-50/5"></div>
      <div className="absolute flex flex-col items-center justify-center space-y-4 px-4 pb-12 text-center md:px-6 xl:pb-32">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {hero.title}
          </h1>
          <p className="max-w-[600px] md:text-xl">{hero.text}</p>
        </div>
        <div className="min-[400px] flex w-full flex-col justify-center gap-2 sm:flex-row">
          {hero.buttons.map(
            (button: {
              text: string;
              url: string;
              variant: 'default' | 'outline';
            }) => (
              <Link href={button.url} key={button.text}>
                <Button
                  className="w-full max-w-sm sm:w-fit"
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
