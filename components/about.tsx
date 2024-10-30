import { ClockIcon, ShieldIcon, StarIcon } from 'lucide-react';

export default function About() {
  return (
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
            <ShieldIcon
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
            <ClockIcon
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
            <StarIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-[#be955f]"
            />
            <h3 className="bg-gradient-to-r from-[#be955f] to-[#e2c08d] bg-clip-text text-center text-xl font-bold text-transparent">
              Equipe Especializada
            </h3>
            <p className="text-center text-sm text-gray-400">
              Profissionais altamente qualificados e experientes dedicados à sua
              saúde bucal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
