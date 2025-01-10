import Image from "next/image"
import heroImg from "@/images/Mains coeur_Pexels.jpg"

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
		<div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<Image
				alt="Nos valeurs, collège les Papangues"
				src={heroImg}
				className="absolute inset-0 -z-10 size-full object-cover"
				width={1280}
				height={853}
			/>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div
					aria-hidden="true"
					className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
				>
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="aspect-1266/975 w-[79.125rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					/>
				</div>
				<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
					<h2 className="text-base/8 font-semibold text-sky-400">
						Nos valeurs
					</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
						Ouvrons ensemble la voie vers un monde de liens, de paix et d’amour
					</p>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
					{values.map((value) => (
						<div
							key={value.id}
							className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
						>
							<dt className="text-sm/6">{value.name}</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight">
								{value.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}
