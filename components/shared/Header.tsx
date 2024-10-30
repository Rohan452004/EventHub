import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
          src="/assets/images/logo.svg" width={140} height={38}
          alt="EventHub Logo"
          className="transition-transform duration-300 hover:scale-105"
          />
          </Link>

          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>

        <div className="flex w-32 justify-end gap-3">
        <SignedIn>
        <div className="flex items-center ">
          <UserButton afterSwitchSessionUrl="/" />
          <MobileNav />
        </div>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in" passHref>
          <Button className="rounded-full" size="lg">Login</Button>
        </Link>
      </SignedOut>

        </div>
      </div>
    </header>
  )
}

export default Header
