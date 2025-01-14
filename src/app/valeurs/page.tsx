import Purpose from "@/components/Purpose"
import Values from "@/components/Values"

export const metadata = {
	title: "Nos valeurs",
}
export default function valuesPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Purpose />
			<Values />
		</main>
	)
}
