import Infos from "@/components/Infos"
import InfosHero from "@/components/InfosHero"
import Cta from "@/components/CtaSection"
import content from "@/data/content.json"

export const metadata = {
	title: "Infos utiles",
}

export default function infosPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<InfosHero />
			<Infos />
			<Cta title={content.cta.infos.title} />
		</main>
	)
}
