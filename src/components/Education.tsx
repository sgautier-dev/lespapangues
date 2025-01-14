import content from "@/data/content.json";

export default function Education() {
	return (
		<div className="bg-custBlue px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
					{content.education.title}
				</h1>
			</div>
		</div>
	);
}
