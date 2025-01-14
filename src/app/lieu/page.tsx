import Location from "@/components/Location"
import Cta from "@/components/CtaSection"

export default function locationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Location />
			<Cta title="Vous connaissez un lieu adapté ?" />
		</main>
	)
}
