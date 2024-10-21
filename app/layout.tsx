import client from '@/graphql/client';
import { Menu } from '@/graphql/gql/graphql';
import menuQuery from '@/graphql/queries/menu.graphql';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Anderson Betioli Odontologia Avançada',
  description:
    'Especialista em implante, estética dental (lente, faceta, clareamento), prótese dentária.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await client.query<{ menus: Menu[] }>({
    query: menuQuery,
  });
  const menu = data.menus[0];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-[100dvh] bg-white text-black">
          <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-white bg-opacity-90">
            <Link className="flex items-center justify-center" href="/">
              {menu.logo && (
                <Image
                  src={menu.logo.url || '/logo2.jpg'}
                  alt={
                    menu.logo.altText
                      ? menu.logo.altText
                      : 'Dr. Anderson Betioli Odontologia Avançada logo'
                  }
                  width={menu.logo.width || 200}
                  height={menu.logo.height || 200}
                  className="overflow-hidden h-auto w-[200px]"
                  priority={true}
                />
              )}
            </Link>
            <nav className="ml-auto gap-4 sm:gap-6 hidden sm:flex">
              {menu.links.map((link) => (
                <Link
                  key={link.texto}
                  className="text-sm font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                  href={link.url}
                >
                  {link.texto}
                </Link>
              ))}
            </nav>
          </header>

          {children}

          <footer className="flex flex-col text-sm gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-gray-500">
              © 2024 Anderson Betioli Odontologia Avançada. Todos os direitos
              reservados.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/terms"
              >
                Termos de Serviço
              </Link>
              <Link
                className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#be955f] to-[#e2c08d] transition-colors duration-300"
                href="/privacy"
              >
                Privacidade
              </Link>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
