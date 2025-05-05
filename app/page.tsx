import { ModelRender } from "@/components/Model";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-col items-center justify-center gap-10 px-4 py-10 md:flex-row md:gap-10">
        <h1 className="text-center text-4xl font-bold md:flex-5 md:text-left md:text-5xl lg:text-6xl">
          Impressões personalizadas para seu cantinho{" "}
          <span className="from-pastel-blue via-pastel-lavender to-pastel-pink ita inline-block bg-gradient-to-r bg-clip-text text-transparent">
            criativo
          </span>
        </h1>

        <div className="aspect-3/4 md:flex-3">
          <ModelRender />
        </div>
      </section>
    </main>
  );
}
