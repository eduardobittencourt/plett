import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="container mx-auto flex h-screen flex-col items-center justify-center gap-4 p-4">
      <Logo />

      <h2 className="text-neutral-dark font-sans">Em breve</h2>
    </main>
  );
}
