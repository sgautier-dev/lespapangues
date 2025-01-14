import Link from "next/link"

interface CtaProps {
	title: string
}

export default function CtaSection({ title }: CtaProps) {
	return (
		<div className="bg-custBlue">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
				<h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
					{title}
				</h2>
				<div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
					<Link
						href="/contact"
						className="inline-flex rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						Contactez-nous
					</Link>
				</div>
			</div>
		</div>
	)
}
