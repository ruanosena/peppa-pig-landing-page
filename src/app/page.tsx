import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="bg-[#fff7f0] min-h-screen">
			<header className="bg-[#ff6b6b] py-4 px-6 md:px-12 flex items-center justify-between">
				<Link href="#" prefetch={false}>
					<img
						src="/placeholder.svg"
						alt="Peppa Pig"
						width={150}
						height={50}
						style={{ aspectRatio: "150/50", objectFit: "cover" }}
					/>
				</Link>
				<nav className="hidden md:flex items-center text-4xl space-x-6">
					<Link
						href="#"
						className="text-white hover:text-[#ffd166] transition-colors"
						prefetch={false}
					>
						Episódios
					</Link>
					<Link
						href="#"
						className="text-white hover:text-[#ffd166] transition-colors"
						prefetch={false}
					>
						Jogos
					</Link>
					<Link
						href="#"
						className="text-white hover:text-[#ffd166] transition-colors"
						prefetch={false}
					>
						Mercadorias
					</Link>
				</nav>
				<Button
					variant="outline"
					className="bg-white text-[#ff6b6b] hover:bg-[#ffd166] hover:text-white transition-colors md:hidden"
				>
					Menu
				</Button>
			</header>
			<main>
				<section className="bg-[#ff6b6b] py-12 md:py-24 px-6 md:px-4 min-[800px]:px-[max((100%_-_70rem)/2,_3rem)] flex flex-col md:flex-row items-center justify-between">
					<div className="max-w-md space-y-4">
						<h1 className="text-4xl md:text-6xl font-bold text-white">
							Bem-vindo ao Mundo da Peppa Pig!
						</h1>
						<p className="text-white text-lg md:text-xl">
							Junte-se a Peppa, George e seus amigos em emocionantes aventuras.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="whitespace-nowrap bg-white text-[#ff6b6b] hover:bg-[#ffd166] hover:text-white px-6 py-3 rounded-full transition-colors"
								prefetch={false}
							>
								Assistir Episódios
							</Link>
							<Link
								href="#"
								className="whitespace-nowrap bg-[#ffd166] text-[#ff6b6b] hover:bg-white hover:text-[#ff6b6b] px-6 py-3 rounded-full transition-colors"
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
						className="mt-8 md:mt-0"
						style={{ aspectRatio: "400/400", objectFit: "cover" }}
					/>
				</section>
				<section className="bg-[#ffd166] py-12 md:py-24 px-6 md:px-12">
					<div className="max-w-xl lg:max-w-5xl mx-auto space-y-4 text-center">
						<h2 className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">Episódios</h2>
						<p className="text-lg md:text-xl text-[#ff6b6b]">
							Assista Peppa e seus amigos em emocionantes aventuras.
						</p>
						<div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-4">
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Episódio 1"
									width={200}
									height={150}
									className="w-full h-auto"
									style={{ aspectRatio: "200/150", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Episódio 1: Poças de Lama</h3>
									<p className="text-sm text-[#ff6b6b]">
										Peppa e seus amigos adoram pular em poças de lama.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Episódio 2"
									width={200}
									height={150}
									className="w-full h-auto"
									style={{ aspectRatio: "200/150", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Episódio 2: Piquenique</h3>
									<p className="text-sm text-[#ff6b6b]">
										Peppa e sua família vão a um piquenique no campo.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Episódio 3"
									width={200}
									height={150}
									className="w-full h-auto"
									style={{ aspectRatio: "200/150", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Episódio 3: Festa do Pijama</h3>
									<p className="text-sm text-[#ff6b6b]">
										Peppa e seus amigos fazem uma festa do pijama na casa da Suzy Ovelha.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Episódio 4"
									width={200}
									height={150}
									className="w-full h-auto"
									style={{ aspectRatio: "200/150", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Episódio 4: Dentista</h3>
									<p className="text-sm text-[#ff6b6b]">Peppa e sua família visitam o dentista.</p>
								</div>
							</Link>
						</div>
					</div>
				</section>
				<section className="bg-[#ff6b6b] py-12 md:py-24 px-6 md:px-12">
					<div className="max-w-xl lg:max-w-5xl mx-auto space-y-4 text-center">
						<h2 className="text-3xl md:text-5xl font-bold text-white">Jogos</h2>
						<p className="text-lg md:text-xl text-white">
							Jogue jogos divertidos e interativos com Peppa e seus amigos.
						</p>
						<div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-4">
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Jogo 1"
									width={200}
									height={150}
									className="w-full h-auto"
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
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Jogo 2"
									width={200}
									height={150}
									className="w-full h-auto"
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
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Jogo 3"
									width={200}
									height={150}
									className="w-full h-auto"
									style={{ aspectRatio: "200/150", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Festa do Pijama da Peppa</h3>
									<p className="text-sm text-[#ff6b6b]">
										Ajude Peppa e seus amigos a ter a melhor festa do pijama.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Jogo 4"
									width={200}
									height={150}
									className="w-full h-auto"
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
				<section className="bg-[#ffd166] py-12 md:py-24 px-6 md:px-12">
					<div className="max-w-xl lg:max-w-5xl mx-auto space-y-4 text-center">
						<h2 className="text-3xl md:text-5xl font-bold text-[#ff6b6b]">Mercadorias</h2>
						<p className="text-lg md:text-xl text-[#ff6b6b]">
							Traga para casa seus personagens favoritos da Peppa Pig.
						</p>
						<div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-4">
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Mercadoria 1"
									width={200}
									height={200}
									className="w-full h-auto"
									style={{ aspectRatio: "200/200", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">
										Boneco de Pelúcia da Peppa Pig
									</h3>
									<p className="text-sm text-[#ff6b6b]">Boneco de pelúcia fofo da Peppa Pig.</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Mercadoria 2"
									width={200}
									height={200}
									className="w-full h-auto"
									style={{ aspectRatio: "200/200", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Mochila da Peppa Pig</h3>
									<p className="text-sm text-[#ff6b6b]">
										Mochila com tema da Peppa Pig para a escola.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Mercadoria 3"
									width={200}
									height={200}
									className="w-full h-auto"
									style={{ aspectRatio: "200/200", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Camiseta da Peppa Pig</h3>
									<p className="text-sm text-[#ff6b6b]">
										Camiseta confortável com tema da Peppa Pig.
									</p>
								</div>
							</Link>
							<Link href="#" className="bg-white rounded-lg overflow-hidden" prefetch={false}>
								<img
									src="/placeholder.svg"
									alt="Mercadoria 4"
									width={200}
									height={200}
									className="w-full h-auto"
									style={{ aspectRatio: "200/200", objectFit: "cover" }}
								/>
								<div className="p-4">
									<h3 className="text-lg font-bold text-[#ff6b6b]">Caneca da Peppa Pig</h3>
									<p className="text-sm text-[#ff6b6b]">
										Caneca com tema da Peppa Pig para seu café da manhã.
									</p>
								</div>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-[#ff6b6b] py-6 px-6 md:px-12 text-center text-white">
				<p>&copy; 2023 Peppa Pig. Todos os direitos reservados.</p>
			</footer>
		</div>
	);
}
