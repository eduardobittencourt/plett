import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";

import Header from "@/components/Header";

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
      <body
        className={`${nunito.variable} ${quicksand.variable} antialised bg-neutral-light text-neutral-dark font-nunito`}
      >
        <Header />

        {children}

        <SpeedInsights />
      </body>
    </html>
  );
}
