import Section from "#/components/ui/section";
import { author } from "#/data/author";

export default function About() {
	return (
		<Section title="About me" id="about">
			<div className="px-2.5 py-4 text-base">
				<p>Hi👋🏾, my name is {author.name};</p>
				<br />
				<p>{author.about}</p>
			</div>
		</Section>
	);
}
