import {
	CollapsibleItemsBlock,
	type CollapsibleItemsBlockProps,
} from "#/components/collapsible-items-block";
import Section from "#/components/ui/section";
import { educations } from "#/data/education";
import { formatDetailPeriod } from "#/lib/formatter";
import { dashAndLower } from "#/lib/strings";

export default function Education() {
	const itemsBlocks = educations.map(
		({ school, program, start, end, skills, tools }) =>
			({
				id: dashAndLower(program),
				org: {
					name: school.name,
					website: school.website,
					logo: school.logo,
				},
				location: school.location,

				items: [
					{
						title: program,
						details: [
							{
								name: "Training period",
								value: formatDetailPeriod(start, end),
							},
						],
						content: {
							title: "Acquired skills",
							highlights: skills,
						},
						tags: tools,
					},
				],
			}) satisfies CollapsibleItemsBlockProps,
	);

	return (
		<Section title="Education" id="education">
			<div className="divide-y divide-border">
				{itemsBlocks.map((props) => (
					<CollapsibleItemsBlock key={props.id} {...props} />
				))}
			</div>
		</Section>
	);
}
