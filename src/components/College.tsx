import content from "@/data/content.json"

export default function College() {
	return (
		<div className="relative isolate overflow-hidden py-24 sm:py-32">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Content */}
			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
						{content.college.title}
					</h1>
					{content.college.paragraphs.map((paragraph, index) => (
						<p
							key={index}
							className="mt-8 text-pretty text-lg font-medium text-white/90 sm:text-xl/8"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
