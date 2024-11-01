'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

// Define the type for the onClick prop
interface NavItemsProps {
  onClick?: () => void;
}

const NavItems: FC<NavItemsProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row items-start gap-2 md:gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`transition-all duration-300 ${
              isActive ? 'text-blue-800 font-extrabold' : 'text-black font-bold'
            } flex-center p-4 hover:text-blue-600 hover:scale-105`}
            // Trigger the onClick event to close the sidebar when an item is clicked
            onClick={onClick}
          >
            <Link href={link.route} className="whitespace-nowrap">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
