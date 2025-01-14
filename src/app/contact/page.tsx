import Contact from "@/components/Contact"

export const metadata = {
	title: "Contact",
}

export default function contactPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Contact />
		</main>
	)
}
