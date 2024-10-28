'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type MenuItem = {
  texto: string;
  url: string;
};

const DropdownMenuCustom: React.FC<{ menuItems: MenuItem[] }> = ({
  menuItems,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="data-[state=open]:text-[#d1a970]">
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2 bg-white p-4">
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.texto}>
            <Link href={item.url}>{item.texto}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuCustom;
