import Link from "next/link"

export default function CTA() {
	return (
		<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					Rejoignez l’aventure Montessori.
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
					Envie d’un collège différent où chaque adolescent peut grandir et
					s’épanouir ?
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/pedagogie"
						className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
					>
						Découvrir notre pédagogie
					</Link>
					<a href="#" className="text-sm/6 font-semibold text-gray-900">
						Nous contacter <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	)
}
