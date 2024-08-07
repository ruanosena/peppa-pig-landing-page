import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/custom/logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff7f0]">
      <header className="flex items-center justify-between bg-[#ff6b6b] px-6 py-4 md:px-12">
        <Link href="#" prefetch={false}>
          <Logo className="h-12 w-24 fill-[#fff7f0] stroke-[#ffd166]" />
          {/* <img
            src="/placeholder.svg"
            alt="Peppa Pig"
            width={150}
            height={50}
            style={{ aspectRatio: "150/50", objectFit: "cover" }}
          /> */}
        </Link>
        <nav className="hidden items-center space-x-6 text-4xl md:flex">
          <Link
            href="#"
            className="text-white transition-colors hover:text-[#ffd166]"
            prefetch={false}
          >
            Episódios
          </Link>
          <Link
            href="#"
            className="text-white transition-colors hover:text-[#ffd166]"
            prefetch={false}
          >
            Jogos
          </Link>
          <Link
            href="#"
            className="text-white transition-colors hover:text-[#ffd166]"
            prefetch={false}
          >
            Mercadorias
          </Link>
        </nav>
        <Button
          variant="outline"
          className="bg-white text-[#ff6b6b] transition-colors hover:bg-[#ffd166] hover:text-white md:hidden"
        >
          Menu
        </Button>
      </header>
      <main>
        <section className="flex flex-col items-center justify-between bg-[#ff6b6b] px-6 py-12 md:flex-row md:px-2 md:py-24 min-[800px]:px-[max((100%_-_70rem)/2,_3rem)]">
          <div className="max-w-md space-y-4">
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              Bem-vindo ao Mundo da Peppa Pig!
            </h1>
            <p className="text-lg text-white md:text-xl">
              Junte-se a Peppa, George e seus amigos em emocionantes aventuras.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-[#ff6b6b] transition-colors hover:bg-[#ffd166] hover:text-white"
                prefetch={false}
              >
                Assistir Episódios
              </Link>
              <Link
                href="#"
                className="whitespace-nowrap rounded-full bg-[#ffd166] px-6 py-3 text-[#ff6b6b] transition-colors hover:bg-white hover:text-[#ff6b6b]"
                prefetch={false}
              >
                Jogar Jogos
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            alt="Peppa Pig"
            width={400}
            height={400}
            className="mt-8 animate-bounce md:mt-0"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </section>
        <section className="bg-[#ffd166] px-6 py-12 md:px-12 md:py-24">
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-[#ff6b6b] md:text-5xl">
              Episódios
            </h2>
            <p className="text-lg text-[#ff6b6b] md:text-xl">
              Assista Peppa e seus amigos em emocionantes aventuras.
            </p>
            <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
              <Link
                href="#"
                className="overflow-hidden rounded-lg bg-white transition-transform hover:scale-110"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="overflow-hidden rounded-lg bg-white transition-transform hover:scale-110"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="overflow-hidden rounded-lg bg-white transition-transform hover:scale-110"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="overflow-hidden rounded-lg bg-white transition-transform hover:scale-110"
                prefetch={false}
              >
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
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#ff6b6b] px-6 py-12 md:px-12 md:py-24">
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-white md:text-5xl">Jogos</h2>
            <p className="text-lg text-white md:text-xl">
              Jogue jogos divertidos e interativos com Peppa e seus amigos.
            </p>
            <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
              <Link
                href="#"
                className="origin-bottom-right overflow-hidden rounded-lg bg-white transition-transform hover:-rotate-6"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="origin-bottom-right overflow-hidden rounded-lg bg-white transition-transform hover:-rotate-3"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="origin-bottom-left overflow-hidden rounded-lg bg-white transition-transform hover:rotate-3"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="origin-bottom-left overflow-hidden rounded-lg bg-white transition-transform hover:rotate-6"
                prefetch={false}
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
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#ffd166] px-6 py-12 md:px-12 md:py-24">
          <div className="mx-auto max-w-xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-bold text-[#ff6b6b] md:text-5xl">
              Mercadorias
            </h2>
            <p className="text-lg text-[#ff6b6b] md:text-xl">
              Traga para casa seus personagens favoritos da Peppa Pig.
            </p>
            <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
              <Link
                href="#"
                className="-translate-y-3 skew-x-2 skew-y-6 overflow-hidden rounded-lg bg-white opacity-90 transition-transform hover:z-10 hover:skew-x-0 hover:skew-y-0 hover:scale-150 hover:opacity-100"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="translate-y-2 skew-x-1 skew-y-2 overflow-hidden rounded-lg bg-white opacity-90 transition-transform hover:z-10 hover:skew-x-0 hover:skew-y-0 hover:scale-150 hover:opacity-100"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="translate-y-2 -skew-x-1 -skew-y-2 overflow-hidden rounded-lg bg-white opacity-90 transition-transform hover:z-10 hover:skew-x-0 hover:skew-y-0 hover:scale-150 hover:opacity-100"
                prefetch={false}
              >
                <img
                  src="/placeholder.svg"
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
              </Link>
              <Link
                href="#"
                className="-translate-y-3 -skew-x-2 -skew-y-6 overflow-hidden rounded-lg bg-white opacity-90 transition-transform hover:z-10 hover:skew-x-0 hover:skew-y-0 hover:scale-150 hover:opacity-100"
                prefetch={false}
              >
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
              </Link>
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
