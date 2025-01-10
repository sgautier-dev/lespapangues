import Image from "next/image"
import sectionImg from "@/images/Réunion projet'_StockSnap.jpg"

export default function Projects() {
	return (
		<div className="relative">
			<Image
				alt="Apprentissage par projet, collège les Papangues"
				src={sectionImg}
				className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
				width={1280}
				height={853}
			/>

			<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
				<div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-end-2 lg:px-8 lg:pt-32">
					<div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
						<h2 className="text-base/8 font-semibold text-sky-600">
							Apprentissage par projet
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Apprendre en réalisant des projets
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							La pédagogie de Maria Montessori repose sur le projet. Chaque
							projet est une opportunité d’apprentissage transversal, tant
							académique que pratique.
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							Les adolescents choisissent leurs projets, et l’équipe pédagogique
							les accompagne pour les structurer et les approfondir,
							individuellement ou collectivement.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
