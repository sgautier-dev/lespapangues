const values = [
	{
		id: 1,
		name: "Développer l’estime de soi et oser révéler son potentiel.",
		value: "Confiance",
	},
	{
		id: 2,
		name: "Prendre conscience de soi et assumer ses choix.",
		value: "Responsabilité",
	},
	{
		id: 3,
		name: "S’émerveiller et apprendre de la diversité du monde.",
		value: "Ouverture",
	},
	{
		id: 4,
		name: "Trouver sa place et agir pour un avenir meilleur.",
		value: "Contribution",
	},
]

export default function Values() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="text-center">
						<h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
							Nos valeurs
						</h2>
					</div>
					<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
						{values.map((value) => (
							<div key={value.id} className="flex flex-col bg-sky-400/5 p-8">
								<dt className="text-sm/6 font-semibold text-gray-600">
									{value.name}
								</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
									{value.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
