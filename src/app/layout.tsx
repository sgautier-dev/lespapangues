import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
})

export const metadata: Metadata = {
	title: {
		template: "%s - Les Papangues, Collège Montessori à la Réunion",
		default: "Les Papangues, Collège Montessori à la Réunion",
	},
	description:
		"Les Papangues est un collège Montessori situé au nord de La Réunion. Un cadre bienveillant et innovant où les adolescents développent autonomie, créativité et confiance en eux.",
	authors: [{ name: "Sébastien Gautier", url: "https://www.sgautier.dev" }],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body
				className={`${quicksand.variable} antialiased mx-auto w-full max-w-screen-2xl bg-white font-quicksand`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
