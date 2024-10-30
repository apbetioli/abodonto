import client from '@/graphql/client';
import { Menu } from '@/graphql/gql/graphql';
import menuQuery from '@/graphql/queries/menu.graphql';
import Image from 'next/image';
import Link from 'next/link';
import DropdownMenuCustom from './ui/dropdown-menu-custom';

export default async function Header() {
  const { data } = await client.query<{ menus: Menu[] }>({
    query: menuQuery,
  });
  const menu = data.menus[0];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between space-x-4 bg-white bg-opacity-90 px-4 lg:px-6">
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
      <nav
        aria-label="Main Navigation"
        className="ml-auto hidden gap-4 sm:gap-6 md:flex"
      >
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
      <nav aria-label="Main Navigation" className="block md:hidden">
        <DropdownMenuCustom menuItems={menu.links} />
      </nav>
    </header>
  );
}
