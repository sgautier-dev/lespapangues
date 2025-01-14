import Image from "next/image"
import heroImg from "@/images/gus-ruballo-h5QNclJUiA8-unsplash.jpg"
import {
	HomeModernIcon,
	BuildingLibraryIcon,
	GlobeAltIcon,
} from "@heroicons/react/20/solid"

const features = [
	{
		name: "Superficie et type de bâtiment.",
		description:
			"Maison à louer. Minimum 150m² de surface intérieure. Idéalement de plain-pied.",
		icon: HomeModernIcon,
	},
	{
		name: "Espaces essentiels.",
		description:
			"Grands espaces modulables pour les cours et les projets. Coin calme / bibliothèque pour favoriser la concentration. Salles spécifiques modulables (sciences, numérique, arts). Cuisine et espace restauration.",
		icon: BuildingLibraryIcon,
	},
	{
		name: "Extérieur et nature.",
		description:
			"Terrain de minimum 500m². Un potager et des espaces verts. Possibilité d’accueillir des animaux",
		icon: GlobeAltIcon,
	},
]
export default function Location() {
	return (
		<div className="overflow-hidden py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-4 lg:pr-8">
						<div className="lg:max-w-lg">
							<h1 className="text-base/7 font-semibold text-sky-600">
								Recherche active d’un espace
							</h1>
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
								Un lieu à la hauteur de notre projet
							</p>
							<p className="mt-6 text-lg/8 text-gray-600">
								Nous sommes en recherche active d’un espace pour accueillir le
								Collège Montessori Les Papangues. <br /> 📍 Localisation : le
								Nord de La Réunion (Saint-Denis - Sainte-Marie)
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold text-gray-900">
											<feature.icon
												aria-hidden="true"
												className="absolute top-1 left-1 size-5 text-sky-600"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline">{feature.description}</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					<Image
						alt="Lieu, collège les Papangues"
						src={heroImg}
						className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
						width={1920}
						height={1280}
					/>
				</div>
			</div>
		</div>
	)
}
