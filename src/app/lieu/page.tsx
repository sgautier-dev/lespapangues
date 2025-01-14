import Location from "@/components/Location"
import LocationCta from "@/components/LocationCta"

export default function locationPage() {
	return (
		<main className="flex flex-col justify-center mx-auto">
			<Location />
            <LocationCta />
		</main>
	)
}
