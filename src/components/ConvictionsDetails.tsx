import {
	AcademicCapIcon,
	CloudArrowUpIcon,
	UsersIcon,
	LightBulbIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Le monde est en mutation",
		description:
			"Notre époque est caractérisée par de nombreuses transformations et des défis nouveaux. Elle nous invite à repenser la plupart de nos modèles comme à explorer de nouvelles voies pour réinventer nos manières de penser et d'agir.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Le monde de demain se construit avec les enfants d’aujourd’hui",
		description:
			"Ce sont les enfants d’aujourd’hui qui sont les véritables créateurs du monde de demain. Nous croyons que chaque adolescent a la capacité de devenir un acteur éclairé et engagé du changement.",
		icon: LightBulbIcon,
	},
	{
		name: "Les enfants d'aujourd'hui ont à grandir dans un environnement éducatif différent",
		description: (
			<>
				<p>
					Si nous souhaitons que les adolescents pensent et agissent le monde de
					demain, il nous faut leur proposer un environnement éducatif différent
					qui combine des racines (un socle solide de valeurs, de connaissances
					et de relations) et des ailes (pour rêver, explorer, créer, aller plus
					loin). Nous croyons en une pédagogie dans laquelle :
				</p>
				<ul className="mt-4 list-disc pl-6 text-gray-600">
					<li>Apprendre à apprendre est au cœur</li>
					<li>La curiosité et l&apos;émerveillement sont un moteur</li>
					<li>L&apos;erreur est envisagée comme une opportunité d&apos;apprentissage</li>
					<li>L&apos;autonomie se cultive chaque jour</li>
					<li>La singularité et la diversité des talents sont valorisées</li>
					<li>La coopération est un des fondements des relations</li>
				</ul>
			</>
		),
		icon: AcademicCapIcon,
	},
	{
		name: "L'éducation est une responsabilité collective",
		description:
			"Nous croyons profondément que c’est ensemble, adolescents, familles et éducateurs, que nous pouvons offrir le cadre d'une éducation transformatrice. Alors rejoignez-nous dans cette nouvelle aventure éducative.",
		icon: UsersIcon,
	},
];

export default function ConvictionsDetails() {
	return (
		<div className="py-8">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto lg:mt-16 max-w-2xl lg:max-w-7xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base/7 font-semibold text-gray-900">
									<div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-sky-600">
										<feature.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base/7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
