import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Direct help",
  description: "Пікапи для ЗСУ – допоможи закрити потребу!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${oswald.variable} antialiased`}
      >
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
