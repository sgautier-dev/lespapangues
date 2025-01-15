import {
	CalendarIcon,
	ClockIcon,
	CreditCardIcon,
} from "@heroicons/react/24/outline"
import content from "@/data/content.json"

const featureIcons = {
	"Calendrier scolaire": CalendarIcon,
	"Horaires de classe": ClockIcon,
	"Tarification et conditions d’inscription": CreditCardIcon,
}

export default function Infos() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					<h1 className="col-span-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						{content.infos.title}
					</h1>
					<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
						{content.infos.features.map((feature) => {
							const Icon =
								featureIcons[feature.name as keyof typeof featureIcons] ||
								CalendarIcon
							return (
								<div key={feature.name}>
									<dt className="text-base/7 font-semibold text-gray-900">
										<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-sky-600">
											<Icon aria-hidden="true" className="size-6 text-white" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-1 text-base/7 text-gray-600">
										{feature.description}
									</dd>
								</div>
							)
						})}
					</dl>
				</div>
			</div>
		</div>
	)
}
