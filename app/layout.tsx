import type { Metadata } from "next";
import {Arima} from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import "./globals.css";

const arima = Arima({
  subsets: ["latin"],
  weight : ['400','500','600','700'],
  variable: '--font-arima',
})

export const metadata: Metadata = {
  title: "EventHub",
  description: "A platform for events",
  icons: {
    icon:'/assets/image/logo.svg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
