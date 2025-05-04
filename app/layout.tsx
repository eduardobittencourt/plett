import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Plett",
  description: "Created by Plett",
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--google-font-nunito",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--google-font-quicksand",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.variable} ${quicksand.variable} antialised`}>
        {children}
      </body>
    </html>
  );
}
