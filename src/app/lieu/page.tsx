import Location from "@/components/Location"
import Cta from "@/components/CtaSection"
import content from "@/data/content.json"

export const metadata = {
	title: "Notre lieu",
}

export default function locationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Location />
			<Cta title={content.cta.location.title} />
		</main>
	)
}
