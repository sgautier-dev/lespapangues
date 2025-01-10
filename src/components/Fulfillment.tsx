import Image from "next/image"
import sectionImg from "@/images/Musiciennes_Fredy Martinez Enamorado.jpg"

export default function Fullfilment() {
	return (
		<div className="relative">
			<Image
				alt="Épanouissement personnel, collège les Papangues"
				src={sectionImg}
				className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
				width={1280}
				height={853}
			/>

			<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
				<div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
					<div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
						<h2 className="text-base/8 font-semibold text-sky-600">
							Épanouissement personnel
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Développer sa sensibilité et sa créativité
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							L’art et l’artisanat développent la sensibilité esthétique et
							émotionnelle, la créativité et le potentiel des adolescents.
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							L’éducation sensorielle, cœur de la pédagogie Montessori, favorise
							la connaissance de soi et la résilience. Nous proposons aussi des
							ateliers de développement personnel, de communication et de
							philosophie.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
