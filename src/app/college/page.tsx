import College from "@/components/College"
import CTA from "@/components/Cta"

export default function collegePage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<div className="bg-bg-img bg-cover bg-center">
				<College />
			</div>
			<CTA />
		</main>
	)
}
