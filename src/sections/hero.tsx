import { ClientOnly } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { author } from "#/data/author";

export default function Hero() {
	return (
		<section className="px-2">
			<div className="relative h-74 xs:h-68 md:h-70 flex flex-col items-center justify-end xs:items-start border-x border-border before:absolute before:top-0 before:left-0 before:w-full before:h-34 before:xs:h-44 before:sm:h-46 before:md:h-48 before:bg-[url('/pattern.webp')] before:opacity-30 before:border-b before:border-b-border dark:before:opacity-100 dark:before:brightness-0 dark:before:invert-20">
				<div className="w-full z-10">
					<div className="w-full flex flex-col items-center xs:flex-row xs:items-end">
						<div className="p-4">
							<div className="size-36 md:size-40 overflow-hidden ring-4 ring-soft ring-offset-2 ring-offset-background rounded-full">
								<img
									src="/avatar.webp"
									alt={`${author.name} ghibli-style avatar`}
									fetchPriority="high"
								/>
							</div>
						</div>

						<div className="pb-4 w-full text-center xs:pb-0 xs:text-start xs:h-24 sm:h-22 xs:border-l xs:border-l-border xs:divide-y divide-border">
							<div className="xs:px-2 xs:py-1">
								<h1 className="text-[1.75rem] sm:text-3xl font-bold">
									{author.name}
								</h1>
							</div>
							<Description />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function Description() {
	const texts = ["Artisan", "Engineer", "Developer"];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 2500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full inline-flex justify-center items-center xs:p-2 xs:justify-start">
			<div className="flex items-center space-x-2">
				<div>Software</div>
				<ClientOnly>
					<TextTransition springConfig={presets.wobbly}>
						{texts[index % texts.length]}
					</TextTransition>
				</ClientOnly>
			</div>
		</div>
	);
}
