import Image from "next/image"
import heroImg from "@/images/Adolescents étoile_by Pexels.jpg"
import Link from "next/link"

export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20 pt-14">
			<div
				aria-hidden="true"
				className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-sky-50 sm:-mr-80 lg:-mr-96"
			/>
			<div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
						<span className="bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500 bg-clip-text text-transparent ">
							Les Papangues{" "}
						</span>
					</h1>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-pretty text-xl font-semibold text-gray-500 sm:text-2xl/8">
							Apprendre . Explorer . Créer
						</p>
						<p className="mt-3 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							Notre collège Montessori, situé dans le nord de La Réunion, offre
							aux adolescents un cadre d’apprentissage unique, basé sur
							l’autonomie, la créativité et le respect du rythme de chacun.
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/college"
								className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
							>
								Découvrir le collège
							</Link>
							<a href="#" className="text-sm/6 font-semibold text-gray-900">
								Nous contacter <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
					<Image
						alt="Collège les Papangues"
						src={heroImg}
						className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						width={1280}
						height={719}
					/>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
		</div>
	)
}
