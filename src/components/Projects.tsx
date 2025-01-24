import Image from "next/image"
import sectionImg from "@/images/Reunion projet_StockSnap.jpg"
import content from "@/data/content.json"

export default function Projects() {
	return (
		<div className="relative">
			<Image
				alt="Apprentissage par projet, collège les Papangues"
				src={sectionImg}
				className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
			/>

			<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
				<div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-end-2 lg:px-8 lg:pt-32">
					<div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
						<h2 className="text-base/8 font-semibold text-sky-600">
							{content.projects.title}
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							{content.projects.subtitle}
						</p>
						{content.projects.paragraphs.map((paragraph, index) => (
							<p key={index} className="mt-6 text-lg/8 text-gray-600">
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
