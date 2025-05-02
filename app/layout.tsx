import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Plett",
  description: "Created by Plett",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body className="antialised">{children}</body>
    </html>
  );
}
