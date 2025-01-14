import {
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
} from "@heroicons/react/24/outline"

const features = [
	{
		name: "Calendrier scolaire",
		description:
			"Nous respectons le calendrier académique de La Réunion. Les élèves suivent le rythme des vacances scolaires fixé par l’académie.",
		icon: CalendarIcon,
	},
	{
		name: "Horaires de classe",
		description:
			"Les élèves ont cours du lundi au vendredi. Mercredi matin uniquement.",
		icon: ClockIcon,
	},
	{
		name: "Tarification et conditions d’inscription",
		description:
			"Les modalités d’inscription et les tarifs seront précisés prochainement.",
		icon: CreditCardIcon,
	},
]

export default function Infos() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<h1 className="col-span-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Informations Clés
					</h1>
					<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
						{features.map((feature) => (
							<div key={feature.name}>
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-sky-600">
										<feature.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 text-base/7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
