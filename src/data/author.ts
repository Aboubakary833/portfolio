import {
	type IconType,
	SiDevdotto,
	SiDiscord,
	SiGithub,
	SiThreads,
	SiX,
} from "@icons-pack/react-simple-icons";
import { LinkedinLogo } from "#/components/logos";

export type SocialLink = {
	id: "x" | "linkedin" | "github" | "discord" | "threads" | "devto";
	name: string;
	url: string;
	Icon: IconType | React.FC<React.SVGProps<SVGSVGElement>>;
};

export type Author = {
	name: string;
	description: string;
	email: string;
	phone: string;
	role: string;
	pronoun: string;
	address: string;
	status: string;
	about: string;

	socialLinks: readonly SocialLink[];
};

export const author = {
	name: "Aboubakary Cissé",

	description: "Software artisan",
	pronoun: "He/Him",
	address: "Thiès, Senegal",

	// Start: base64 encoded informations
	email: "YWJvdWJha2FyeWNpc3NlNDEwQGdtYWlsLmNvbQ==",
	phone: "KzIyMSA3OCAwMTUgOTggMjI=",
	// End

	role: "Software Developer",
	about: `I'm a software developer passionate about turning ideas into meaningful digital products. I build scalable, maintainable applications with clean architecture and thoughtful user experiences, always aiming to deliver solutions that are reliable, efficient, and built to last.`,
	status: "Open to work",

	socialLinks: [
		{
			id: "x",
			name: "X (ex-Twitter)",
			url: "https://x.com/Abubakr_Cisse",
			Icon: SiX,
		},
		{
			id: "linkedin",
			name: "Linkedin",
			url: "https://linkedin.com/in/aboubakarycisse",
			Icon: LinkedinLogo,
		},
		{
			id: "github",
			name: "Github",
			url: "https://github.com/aboubakary833",
			Icon: SiGithub,
		},
		{
			id: "discord",
			name: "Discord",
			url: `https://discordapp.com/users/${atob("NzkxNzEwODk5MjM2MzcyNTIw")}`,
			Icon: SiDiscord,
		},
		{
			id: "threads",
			name: "Threads",
			url: "https://threads.com/@43ub4kr",
			Icon: SiThreads,
		},
		{
			id: "devto",
			name: "Dev.to",
			url: "https://dev.to/aboubakary833",
			Icon: SiDevdotto,
		},
	],
} as const satisfies Author;
