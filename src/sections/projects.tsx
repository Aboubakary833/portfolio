import { ProjectCard } from "#/components/project-card";
import Section from "#/components/ui/section";
import { projects } from "#/data/projects";

export default function Project() {
	return (
		<Section title="Projects" id="projects">
			<div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
				{projects.map(({ id, ...props }) => (
					<ProjectCard key={id} {...props} />
				))}
			</div>
		</Section>
	);
}
