import Education from "@/components/Education"
import Exigence from "@/components/Exigence"
import Fullfilment from "@/components/Fulfillment"
import Hands from "@/components/Hands"
import Projects from "@/components/Projects"
import Responsabilities from "@/components/Responsabilities"

export default function educationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Education />
			<Exigence />
			<Projects />
            <Hands />
            <Fullfilment />
            <Responsabilities />
		</main>
	)
}
