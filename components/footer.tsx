import Link from 'next/link';

export default function Footer({ title }: { title: string }) {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 text-sm sm:flex-row md:px-6">
      <p className="text-gray-500">
        © {new Date().getFullYear()} {title}. Todos os direitos reservados.
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          className="from-[#be955f] to-[#e2c08d] transition-colors duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
          href="/termos-de-uso"
        >
          Termos de Serviço
        </Link>
        <Link
          className="from-[#be955f] to-[#e2c08d] transition-colors duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
          href="/politica-de-privacidade"
        >
          Privacidade
        </Link>
      </nav>
    </footer>
  );
}
