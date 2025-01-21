import ConvictionsDetails from "@/components/ConvictionsDetails"
import Convictions from "@/components/Convinctions"

export const metadata = {
	title: "Nos convictions",
}
export default function valuesPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Convictions />
			<ConvictionsDetails />
		</main>
	)
}
