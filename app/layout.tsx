import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-[100dvh] flex-col bg-white text-black">
          <Header />

          {children}

          <Footer title={metadata.title as string} />
        </div>
      </body>
    </html>
  );
}
