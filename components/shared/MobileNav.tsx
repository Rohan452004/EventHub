'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import NavItems from './NavItems';

const MobileNav = () => {
  // State to control the sheet open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sheet
  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="align-middle" onClick={() => setIsOpen(true)}>
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer m-2 transition-transform duration-300 hover:scale-110"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 p-5 bg-white transition-transform duration-300 ease-in-out">
          <div className="flex justify-center">
            <Image
              src="/assets/images/logo.svg"
              alt="EventHub Logo"
              width={128}
              height={38}
              className="transition-opacity duration-300 hover:opacity-90"
            />
          </div>

          <Separator className="border border-gray-200" />

          {/* Pass the close function to NavItems */}
          <NavItems onClick={closeSheet} />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
