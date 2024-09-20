import Link from 'next/link';
import { Button } from './ui/button';

// @ts-expect-error TODO fix it
export default function Hero({ hero }) {
  return (
    <section className="w-full h-screen flex items-center justify-center text-white">
      <video
        className="absolute h-full w-full object-cover brightness-75"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute flex flex-col justify-center space-y-4 items-center text-center">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            {hero.titulo}
          </h1>
          <p className="max-w-[600px] md:text-xl">{hero.texto}</p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          {hero.buttons.map(
            (button: {
              text: string;
              url: string;
              variant: 'default' | 'outline';
            }) => (
              <Link href={button.url} key={button.text}>
                <Button variant={button.variant}>{button.text}</Button>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
