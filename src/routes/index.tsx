import { createFileRoute } from "@tanstack/react-router";
import { BlockSeparator } from "#/components/ui/separator";
import About from "#/sections/about";
import Education from "#/sections/education";
import Experience from "#/sections/experience";
import Hero from "#/sections/hero";
import Overview from "#/sections/overview";
import Project from "#/sections/projects";
import Socials from "#/sections/socials";
import Stack from "#/sections/stack";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main>
			<Hero />
			<BlockSeparator />
			<Overview />
			<Socials />
			<BlockSeparator />
			<About />
			<BlockSeparator />
			<Stack />
			<BlockSeparator />
			<Experience />
			<BlockSeparator />
			<Education />
			<BlockSeparator />
			<Project />
		</main>
	);
}
