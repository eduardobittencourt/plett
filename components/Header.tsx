import Link from "next/link";

import Logo from "./Logo";

export default function Header() {
  return (
    <header className="container mx-auto flex h-16 items-center gap-4 p-4">
      <Logo />

      <nav className="flex flex-1 items-center justify-end gap-4">
        <Link href="/">Início</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
