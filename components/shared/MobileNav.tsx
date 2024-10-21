import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
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

          <NavItems />

        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
