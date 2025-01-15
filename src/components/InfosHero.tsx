import content from "@/data/content.json"

export default function InfosHero() {
	return (
		<div className="bg-custBlue px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
					{content.infosHero.title}
				</h2>
				<p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
					{content.infosHero.description}
				</p>
			</div>
		</div>
	)
}
