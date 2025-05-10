import { ModelRender } from "@/components/Model";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <section className="flex flex-col items-center justify-center gap-10 px-4 py-10 md:flex-row md:gap-10">
        <div className="flex flex-col gap-4 md:flex-5">
          <h1 className="text-center text-4xl font-bold md:text-left lg:text-5xl">
            Impressões personalizadas para seu cantinho{" "}
            <span className="ita inline-block bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              criativo
            </span>
          </h1>

          <p>
            Descubra como nossas impressões personalizadas podem transformar seu
            espaço em um lugar único e cheio de estilo. Desde quadros
            decorativos até itens de papelaria, temos tudo o que você precisa
            para dar vida às suas ideias.
          </p>
        </div>

        <div className="aspect-3/4 md:flex-3">
          <ModelRender />
        </div>
      </section>
    </main>
  );
}
