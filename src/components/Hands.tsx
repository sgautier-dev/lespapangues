import Image from "next/image"
import sectionImg1 from "@/images/Fraises_Pexels.jpg"
import sectionImg2 from "@/images/Petit-dejeuner_Pexels.jpg"
import sectionImg3 from "@/images/Cabane_Irina.jpg"
import content from "@/data/content.json"

export default function Hands() {
	return (
		<div className="relative isolate">
			<div className="overflow-hidden">
				<div className="mx-auto max-w-7xl px-6 pb-32 sm:pt-12 lg:px-8">
					<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div className="relative max-w-lg lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h2 className="text-base/8 font-semibold text-sky-600">
								{content.hands.title}
							</h2>
							<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
								{content.hands.subtitle}
							</p>
							{content.hands.paragraphs.map((paragraph, index) => (
								<p key={index} className="mt-6 text-lg/8 text-gray-600">
									{paragraph}
								</p>
							))}
						</div>
						<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative hidden sm:flex">
									<Image
										alt="Travail des mains, collège les Papangues"
										src={sectionImg1}
										className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={1280}
										height={848}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
								</div>
							</div>
							<div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div className="relative flex sm:hidden">
									<Image
										alt="Travail des mains, collège les Papangues"
										src={sectionImg1}
										className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={1280}
										height={848}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
								</div>

								<div className="relative">
									<Image
										alt="Travail des mains, collège les Papangues"
										src={sectionImg2}
										className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={1280}
										height={853}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
								</div>
								<div className="relative hidden lg:flex">
									<Image
										alt="Travail des mains, collège les Papangues"
										src={sectionImg3}
										className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={1280}
										height={859}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
								</div>
							</div>
							<div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div className="relative flex lg:hidden">
									<Image
										alt="Travail des mains, collège les Papangues"
										src={sectionImg3}
										className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
										width={1280}
										height={859}
									/>
									<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
