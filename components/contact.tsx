import Link from 'next/link';
import { Button } from './ui/button';

export default function Contact() {
  return (
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
  );
}
