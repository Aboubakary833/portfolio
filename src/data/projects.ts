import { author, type SocialLink } from "./author";

export type Project = {
	id: string;
	title: string;
	description: string;
	tags: readonly string[];
	externalUrls?: {
		github?: string;
		live?: string;
	};
};

const toGithubUrl = (repo: string) => {
	if (repo === "") throw new Error("repo name can't be empty string");

	const github = author.socialLinks.find(
		(url) => url.id === "github",
	) as SocialLink;
	return `${github.url}/${repo}`;
};

export const projects = [
	{
		id: "codexa",
		title: "Codexa",
		description:
			"A terminal-based application designed to help developers quickly access concise, practical code snippets and common development patterns, without the verbosity of traditional documentation.",
		tags: [
			"Go",
			"Bubbletea",
			"Cobra",
			"SQLite",
			"Hexagonal Architecture",
			"CLI",
			"TUI",
		],
		externalUrls: {
			github: toGithubUrl("codexa"),
		},
	},
	{
		id: "comu",
		title: "Comu",
		description:
			"A modular monolith backend designed with Hexagonal Architecture and Domain-Driven Design principles, providing scalable APIs for authentication, users, posts and notifications.",
		tags: [
			"Go",
			"Echo",
			"MySQL",
			"Redis",
			"Docker",
			"REST API",
			"Clean architecture",
			"Learning project",
		],
		externalUrls: {
			github: toGithubUrl("comu"),
		},
	},
	{
		id: "apen",
		title: "Apen Burkina",
		description:
			"A professional accreditation management platform that streamlines certification workflows through a secure administrative dashboard. I worked on it as a consultant for Total-Innovation.",
		tags: ["PHP", "MySQL", "Laravel", "React", "Inertia", "shadcn/ui"],
		externalUrls: {
			live: "https://apen.bf",
		},
	},
	{
		id: "clean-city",
		title: "Clean City",
		description:
			"A business website and e-commerce platform allowing customers to purchase cleaning products, request waste collection quotes, and manage service inquiries online.",
		tags: ["PHP", "MySQL", "Laravel", "React", "E-commerce"],
		externalUrls: {
			live: "https://cleancity.bf",
		},
	},
] as const satisfies Project[];
