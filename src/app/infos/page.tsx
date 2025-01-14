import Infos from "@/components/Infos"
import InfosHero from "@/components/InfosHero"
import Cta from "@/components/CtaSection"

export default function infosPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<InfosHero />
			<Infos />
			<Cta title="Une question ? Besoin d’informations ?" />
		</main>
	)
}
