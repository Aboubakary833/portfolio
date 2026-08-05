import {
	CollapsibleItemsBlock,
	type CollapsibleItemsBlockProps,
} from "#/components/collapsible-items-block";
import Section from "#/components/ui/section";
import { experiences } from "#/data/experience";
import { formatDetailPeriod } from "#/lib/formatter";

export default function Experience() {
	const itemsBlocks = experiences.map(
		({ id, company, location, roles }) =>
			({
				id,
				org: company,
				location,
				items: roles.map(
					({ title, type, start, end, highlights, technologies }) => ({
						title,
						details: [
							{
								name: "Employment type",
								value: type,
							},
							{
								name: "Employment period",
								value: formatDetailPeriod(start, end),
							},
						],
						content: {
							title: "Achievements",
							highlights,
						},
						tags: technologies,
					}),
				),
			}) satisfies CollapsibleItemsBlockProps,
	);

	return (
		<Section title="Experience" id="experience">
			<div className="divide-y divide-border">
				{itemsBlocks.map((block) => (
					<CollapsibleItemsBlock key={block.id} {...block} />
				))}
			</div>
		</Section>
	);
}
