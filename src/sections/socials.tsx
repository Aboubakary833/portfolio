import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { author } from "#/data/author";

export default function Socials() {
	const { socialLinks } = author;

	return (
		<section className="px-2">
			<div className="p-2 border-x border-x-border">
				<ul className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3">
					{socialLinks.map(({ id, name, url, Icon }) => (
						<li key={id}>
							<a
								href={url}
								className="flex items-center justify-between p-2 border border-border hover:transition-colors hover:bg-border/50"
								target="_blank"
							>
								<div className="inline-flex items-center space-x-2">
									<Icon className="size-6" />
									<span>{name}</span>
								</div>
								<div>
									<HugeiconsIcon icon={ArrowUpRight03Icon} className="size-5" />
								</div>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
