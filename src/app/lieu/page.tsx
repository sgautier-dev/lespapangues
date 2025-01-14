import Location from "@/components/Location"
import Cta from "@/components/CtaSection"

export const metadata = {
	title: "Notre lieu",
}
export default function locationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Location />
			<Cta title="Vous connaissez un lieu adapté ?" />
		</main>
	)
}
