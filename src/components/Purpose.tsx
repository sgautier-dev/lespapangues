import Image from "next/image"
import heroImg from "@/images/Adolescents_etoile_by Pexels.jpg"
import Link from "next/link"
export default function Purpose() {
	return (
		<div className="relative">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
					<svg
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
						className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
					>
						<polygon points="0,0 90,0 50,100 0,100" />
					</svg>

					<div className="relative px-6 py-12 sm:py-24 lg:px-8 lg:py-32 lg:pr-0">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
							<h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
								Apprendre, s’éveiller, agir
							</h1>
							<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
								Nous sommes le collège-lycée Montessori du Nord de La Réunion.
								Un lieu de vie, d’apprentissage et de partage. En mouvement,
								connecté à son environnement. Co-créé, co-géré et co-animé par
								les adolescents et les adultes. Offrant un cadre unique pour
								s’épanouir et grandir.
							</p>
							<div className="mt-10 flex items-center gap-x-6">
								<Link
									href="/convictions"
									className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
								>
									Nos convictions
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<Image
					alt="Raison d'être, collège les Papangues"
					src={heroImg}
					className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
					width={1280}
					height={719}
				/>
			</div>
		</div>
	)
}
