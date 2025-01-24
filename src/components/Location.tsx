import Image from "next/image"
import heroImg from "@/images/gus-ruballo-h5QNclJUiA8-unsplash.jpg"
import {
	HomeModernIcon,
	BuildingLibraryIcon,
	GlobeAltIcon,
} from "@heroicons/react/20/solid"
import content from "@/data/content.json"

// Définition explicite des icônes associées aux noms des features
const featureIcons = {
	"Superficie et type de bâtiment.": HomeModernIcon,
	"Espaces essentiels.": BuildingLibraryIcon,
	"Extérieur et nature.": GlobeAltIcon,
}

export default function Location() {
	return (
		<div className="overflow-hidden py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pt-4 lg:pr-8">
						<div className="lg:max-w-lg">
							<h1 className="text-base/7 font-semibold text-sky-600">
								{content.location.title}
							</h1>
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
								{content.location.subtitle}
							</p>
							<p className="mt-6 text-lg/8 text-gray-600">
								{content.location.description}
							</p>
							<p className="mt-6 text-lg/8 text-gray-600">
								{content.location.location}
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
								{content.location.features.map((feature) => {
									const Icon =
										featureIcons[feature.name as keyof typeof featureIcons] ||
										HomeModernIcon
									return (
										<div key={feature.name} className="relative pl-9">
											<dt className="inline font-semibold text-gray-900">
												<Icon
													aria-hidden="true"
													className="absolute top-1 left-1 size-5 text-sky-600"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">{feature.description}</dd>
										</div>
									)
								})}
							</dl>
						</div>
					</div>
					<Image
						alt="Lieu, collège les Papangues"
						src={heroImg}
						className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
						priority
					/>
				</div>
			</div>
		</div>
	)
}
