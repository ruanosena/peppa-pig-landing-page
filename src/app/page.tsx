import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/custom/logo";
import { cn } from "@/lib/utils";
import { fontBrand } from "./layout";
import { Hero } from "@/components/custom/hero";
import { Merchandise } from "@/components/custom/merchandise";
import { Game } from "@/components/custom/game";
import { Episode } from "@/components/custom/episode";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff7f0]">
      <header className="flex items-center justify-between bg-[#ff6b6b] px-6 py-4 md:px-12">
        <Link href="#" prefetch={false}>
          <Logo
            className={cn(
              "h-12 w-24 fill-[#fff7f0] stroke-[#ffd166]",
              fontBrand.className,
            )}
          />
        </Link>
        <nav className="hidden items-center space-x-6 text-4xl md:flex">
          <Link
            href="#Episodios"
            className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
            prefetch={false}
          >
            Episódios
          </Link>
          <Link
            href="#Jogos"
            className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
            prefetch={false}
          >
            Jogos
          </Link>
          <Link
            href="#Mercadorias"
            className="text-white transition-colors hover:text-[#ffd166] active:text-[#ffd166]"
            prefetch={false}
          >
            Mercadorias
          </Link>
        </nav>
        <Button
          variant="outline"
          className="bg-white text-[#ff6b6b] transition-colors hover:bg-[#ffd166] hover:text-white active:bg-[#ffd166] active:text-white md:hidden"
        >
          Menu
        </Button>
      </header>
      <main>
        <Hero />
        <section
          id="Episodios"
          className="bg-[#ffd166] px-6 py-12 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-[#ff6b6b] md:text-5xl">
              Episódios
            </h2>
            <p className="text-lg text-[#ff6b6b] md:text-xl">
              Assista Peppa e seus amigos em emocionantes aventuras.
            </p>
            <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
              <Episode>
                <img
                  src="/episode-1.jpg"
                  alt="Episódio 1"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-right text-lg font-bold text-[#ff6b6b]">
                    Episódio 1:
                    <br />
                    <span className="text-xl uppercase">Poças de Lama</span>
                  </h3>
                  <p className="text-balance text-sm text-[#ff6b6b]">
                    Peppa e seus amigos adoram pular em poças de lama.
                  </p>
                </div>
              </Episode>
              <Episode>
                <img
                  src="/episode-2.jpg"
                  alt="Episódio 2"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-right text-lg font-bold text-[#ff6b6b]">
                    Episódio 2:
                    <br />
                    <span className="text-xl uppercase">Piquenique</span>
                  </h3>
                  <p className="text-balance text-sm text-[#ff6b6b]">
                    Peppa e sua família vão a um piquenique no campo.
                  </p>
                </div>
              </Episode>
              <Episode>
                <img
                  src="/episode-3.jpg"
                  alt="Episódio 3"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-right text-lg font-bold text-[#ff6b6b]">
                    Episódio 3:
                    <br />
                    <span className="text-xl uppercase">Festa do Pijama</span>
                  </h3>
                  <p className="text-balance text-sm text-[#ff6b6b]">
                    Peppa e seus amigos fazem uma festa do pijama na casa da
                    Suzy Ovelha.
                  </p>
                </div>
              </Episode>
              <Episode>
                <img
                  src="/placeholder.svg"
                  alt="Episódio 4"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-right text-lg font-bold text-[#ff6b6b]">
                    Episódio 4:
                    <br />
                    <span className="text-xl uppercase">Dentista</span>
                  </h3>
                  <p className="text-balance text-sm text-[#ff6b6b]">
                    Peppa e sua família visitam o dentista.
                  </p>
                </div>
              </Episode>
            </div>
          </div>
        </section>
        <section
          id="Jogos"
          className="bg-[#ff6b6b] px-6 py-12 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-white md:text-5xl">Jogos</h2>
            <p className="text-lg text-white md:text-xl">
              Jogue jogos divertidos e interativos com Peppa e seus amigos.
            </p>
            <div className="grid gap-8 px-4 xs:grid-cols-2 xs:gap-4 xs:px-0 lg:grid-cols-4">
              <Game
                activeClassName="-rotate-3 xs:-rotate-6"
                className="origin-bottom-right lg:hover:-rotate-6"
              >
                <img
                  src="/game-1.jpg"
                  alt="Jogo 1"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#ff6b6b]">
                    Pulo da Poça de Lama da Peppa
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Ajude Peppa a pular sobre as poças de lama.
                  </p>
                </div>
              </Game>
              <Game
                activeClassName="rotate-3 xs:rotate-6"
                className="origin-bottom-left lg:origin-bottom-right lg:hover:-rotate-3"
              >
                <img
                  src="/game-2.jpg"
                  alt="Jogo 2"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#ff6b6b]">
                    Aventura do Piquenique da Peppa
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Ajude Peppa e seus amigos a preparar o piquenique perfeito.
                  </p>
                </div>
              </Game>
              <Game
                activeClassName="-rotate-3 xs:-rotate-6"
                className="origin-bottom-right lg:origin-bottom-left lg:hover:rotate-3"
              >
                <img
                  src="/game-3.jpg"
                  alt="Jogo 3"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#ff6b6b]">
                    Festa do Pijama da Peppa
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Ajude Peppa e seus amigos a ter a melhor festa do pijama.
                  </p>
                </div>
              </Game>
              <Game
                activeClassName="rotate-3 xs:rotate-6"
                className="origin-bottom-left lg:hover:rotate-6"
              >
                <img
                  src="/placeholder.svg"
                  alt="Jogo 4"
                  width={200}
                  height={150}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/150", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#ff6b6b]">
                    Aventura do Dentista da Peppa
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Ajude Peppa e sua família a visitar o dentista.
                  </p>
                </div>
              </Game>
            </div>
          </div>
        </section>
        <section
          id="Mercadorias"
          className="bg-[#ffd166] px-6 py-12 md:px-12 md:py-24"
        >
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-[#ff6b6b] md:text-5xl">
              Mercadorias
            </h2>
            <p className="text-lg text-[#ff6b6b] md:text-xl">
              Traga para casa seus personagens favoritos da Peppa Pig.
            </p>
            <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
              <Merchandise className="lg:-translate-y-3 lg:skew-x-2 lg:skew-y-6">
                <img
                  src="/merchandise-1.jpg"
                  alt="Mercadoria 1"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#ff6b6b]">
                    Boneco de Pelúcia da Peppa Pig
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Boneco de pelúcia fofo da Peppa Pig.
                  </p>
                </div>
              </Merchandise>
              <Merchandise className="lg:translate-y-2 lg:skew-x-1 lg:skew-y-2">
                <img
                  src="/merchandise-2.jpg"
                  alt="Mercadoria 2"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#ff6b6b]">
                    Mochila da Peppa Pig
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Mochila com tema da Peppa Pig para a escola.
                  </p>
                </div>
              </Merchandise>
              <Merchandise className="lg:translate-y-2 lg:-skew-x-1 lg:-skew-y-2">
                <img
                  src="/merchandise-3.jpg"
                  alt="Mercadoria 3"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#ff6b6b]">
                    Camiseta da Peppa Pig
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Camiseta confortável com tema da Peppa Pig.
                  </p>
                </div>
              </Merchandise>
              <Merchandise className="lg:-translate-y-3 lg:-skew-x-2 lg:-skew-y-6">
                <img
                  src="/placeholder.svg"
                  alt="Mercadoria 4"
                  width={200}
                  height={200}
                  className="h-auto w-full"
                  style={{ aspectRatio: "200/200", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#ff6b6b]">
                    Caneca da Peppa Pig
                  </h3>
                  <p className="text-sm text-[#ff6b6b]">
                    Caneca com tema da Peppa Pig para seu café da manhã.
                  </p>
                </div>
              </Merchandise>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#ff6b6b] px-6 py-6 text-center text-white md:px-12">
        <p>&copy; 2023 Peppa Pig. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
