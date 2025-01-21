import College from "@/components/College"
import CtaInfos from "@/components/CtaSection"
import CTA from "@/components/Cta"
import Infos from "@/components/Infos"
import InfosHero from "@/components/InfosHero"
import content from "@/data/content.json"

export const metadata = {
	title: "Notre collège",
}
export default function collegePage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<div className="bg-bg-img bg-cover bg-center">
				<College />
			</div>
			<CTA />
			<InfosHero />
			<Infos />
			<CtaInfos title={content.cta.infos.title} />
		</main>
	)
}
