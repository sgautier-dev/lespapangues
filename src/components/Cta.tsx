import Link from "next/link"
import content from "@/data/content.json"

export default function CTA() {
	return (
		<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					{content.cta.college.title}
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
					{content.cta.college.description}
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/pedagogie"
						className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
					>
						{content.cta.college.buttons.primary}
					</Link>
					<Link
						href="/contact"
						className="text-sm/6 font-semibold text-gray-900"
					>
						{content.cta.college.buttons.secondary}{" "}
						<span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
