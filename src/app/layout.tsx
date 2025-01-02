import type { Metadata } from "next";
import "@styles/globals.css";
import { inter } from '@fonts/fonts'
import { cn } from '@lib/utils'
import { RootLayoutProps } from './types'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
      <html lang='en'>
      <body className={cn(inter.variable)}>
      {children}
      </body>
      </html>
  );
}
