import Founders from "@/components/Founders"
import Join from "@/components/Join"
import Team from "@/components/Team"

export const metadata = {
	title: "Notre équipe",
}
export default function teamPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Founders />
			<Team />
			<Join />
		</main>
	)
}
