import Image from "next/image"
import heroImg from "@/images/Convictions.jpg"

// const stats = [
// 	{ id: 1, name: "Creators on the platform", value: "8,000+" },
// 	{ id: 2, name: "Flat platform fee", value: "3%" },
// 	{ id: 3, name: "Uptime guarantee", value: "99.9%" },
// 	{ id: 4, name: "Paid out to creators", value: "$70M" },
// ]

export default function Convictions() {
	return (
		<div className="relative">
			<Image
				alt="Nos convictions, collège les Papangues"
				src={heroImg}
				className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
				width={2850}
				height={1900}
			/>

			<div className="mx-auto grid max-w-7xl lg:grid-cols-2">
				<div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
					<div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
						<h1 className="text-base/8 font-semibold text-sky-600">
							Nos convictions
						</h1>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Lorem ipsum
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
							impedit perferendis suscipit eaque, iste dolor cupiditate
							blanditiis ratione.
						</p>
						{/* <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
							{stats.map((stat) => (
								<div
									key={stat.id}
									className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
								>
									<dt className="text-sm/6 text-gray-600">{stat.name}</dt>
									<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
										{stat.value}
									</dd>
								</div>
							))}
						</dl> */}
					</div>
				</div>
			</div>
		</div>
	)
}
