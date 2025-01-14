import Education from "@/components/Education"
import Exigence from "@/components/Exigence"
import Fulfillment from "@/components/Fulfillment"
import Hands from "@/components/Hands"
import Projects from "@/components/Projects"
import Responsabilities from "@/components/Responsabilities"

export const metadata = {
	title: "Notre pédagogie",
}
export default function educationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Education />
			<Exigence />
			<Projects />
			<Hands />
			<Fulfillment />
			<Responsabilities />
		</main>
	)
}
