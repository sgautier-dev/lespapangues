import Image from "next/image"
import heroImg from "@/images/fulllogo.png"
import Link from "next/link"
import content from "@/data/content.json"

export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden pt-14 bg-custBlue">
			<div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:px-8 lg:py-32">
				<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1">
					<h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
						<span className="bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500 bg-clip-text text-transparent ">
							{content.hero.title}
						</span>
					</h1>
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
						<p className="text-pretty text-xl font-semibold text-gray-500 sm:text-2xl/8">
							{content.hero.subtitle}
						</p>
						<p className="mt-3 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							{content.hero.description}
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/college"
								className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
							>
								{content.hero.buttons.primary}
							</Link>
							<Link
								href="/contact"
								className="text-sm/6 font-semibold text-white"
							>
								{content.hero.buttons.secondary}{" "}
								<span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<Image
						alt="Collège les Papangues"
						src={heroImg}
						className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2"
						priority
					/>
				</div>
			</div>
		</div>
	)
}
