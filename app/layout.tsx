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
        <div className="flex min-h-[100dvh] flex-col bg-white text-black">
          <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center bg-white bg-opacity-90 px-4 lg:px-6">
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
                  className="h-auto w-[200px] overflow-hidden"
                  priority={true}
                />
              )}
            </Link>
            <nav className="ml-auto hidden gap-4 sm:flex sm:gap-6">
              {menu.links.map((link) => (
                <Link
                  key={link.texto}
                  className="from-[#be955f] to-[#e2c08d] text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
                  href={link.url}
                >
                  {link.texto}
                </Link>
              ))}
            </nav>
          </header>

          {children}

          <footer className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 text-sm sm:flex-row md:px-6">
            <p className="text-gray-500">
              © 2024 Anderson Betioli Odontologia Avançada. Todos os direitos
              reservados.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <Link
                className="from-[#be955f] to-[#e2c08d] transition-colors duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
                href="/terms"
              >
                Termos de Serviço
              </Link>
              <Link
                className="from-[#be955f] to-[#e2c08d] transition-colors duration-300 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
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
