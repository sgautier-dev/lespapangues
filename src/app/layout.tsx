import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: {
		template: "%s - Les Papangues, Collège Montessori à la Réunion",
		default: "Aqua Dance Flow by Julie Gautier",
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto w-full max-w-screen-2xl bg-white`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
