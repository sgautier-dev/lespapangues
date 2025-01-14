export default function College() {
	return (
		<div className="relative isolate overflow-hidden py-24 sm:py-32">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
						Un collège Montessori à <span className=" text-nowrap">la Réunion</span>
					</h1>
					<p className="mt-8 text-pretty text-lg font-medium text-white/90 sm:text-xl/8">
						Situé dans le <span className=" font-semibold">Nord de l’île</span>,
						notre collège Montessori offre aux adolescents un cadre
						d’apprentissage respectueux de leur{" "}
						<span className=" font-semibold">
							rythme, autonomie et créativité
						</span>
						.
					</p>
					<p className="mt-8 text-pretty text-lg font-medium text-white/90 sm:text-xl/8">
						Notre pédagogie, axée sur le{" "}
						<span className=" font-semibold">
							développement personnel, intellectuel et manuel
						</span>
						, permet à chaque élève de progresser sans pression et
						d&apos;explorer ses talents à travers des{" "}
						<span className=" font-semibold">
							projets concrets et des activités pratiques
						</span>
						.
					</p>
				</div>
			</div>
		</div>
	)
}
