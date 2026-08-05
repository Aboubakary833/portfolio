export type EmploymentType =
	| "Full-time"
	| "Part-time"
	| "Internship"
	| "Freelance";

export type Role = {
	title: string;
	type: EmploymentType;

	start: {
		month: string;
		year: number;
	};

	end?: {
		month: string;
		year: number;
	};

	highlights: readonly string[];
	technologies: readonly string[];
};

export type Experience = {
	id: string;

	company: {
		name: string;
		website: string;
		logo: string;
	};

	location: string;
	roles: readonly Role[];
};

export const experiences = [
	{
		id: "legrand-web-services",

		company: {
			name: "LeGrand Web Services",
			website: "https://legrandwebservices.com",
			logo: "/companies/legrandweb.png",
		},

		location: "Ouagadougou, Burkina Faso",

		roles: [
			{
				title: "Fullstack Developer",
				type: "Full-time",

				start: {
					month: "January",
					year: 2024,
				},

				end: {
					month: "April",
					year: 2024,
				},

				highlights: [
					"Contributed to the development and launch of the company website.",
					"Developed WordPress websites for client projects.",
				],

				technologies: [
					"TypeScript",
					"Node.js",
					"Next.js",
					"shadcn/ui",
					"GSAP",
					"WordPress",
				],
			},
		],
	},

	{
		id: "horinfo",

		company: {
			name: "Horinfo",
			website: "#",
			logo: "/companies/horinfo.png",
		},

		location: "Ouagadougou, Burkina Faso",

		roles: [
			{
				title: "Fullstack Developer",
				type: "Full-time",

				start: {
					month: "April",
					year: 2022,
				},

				end: {
					month: "May",
					year: 2023,
				},

				highlights: [
					"Designed and developed an event management platform capable of handling thousands of participant registrations.",
					"Contributed to the development of an ERP system for a public-sector organization.",
				],

				technologies: [
					"TypeScript",
					"JavaScript",
					"React",
					"Inertia.js",
					"PHP",
					"Laravel",
				],
			},
		],
	},

	{
		id: "smart-touch-group",

		company: {
			name: "Smart Touch Group",
			website: "#",
			logo: "/companies/smtgroup.png",
		},

		location: "Ouagadougou, Burkina Faso",

		roles: [
			{
				title: "Software Developer Intern",
				type: "Internship",

				start: {
					month: "July",
					year: 2021,
				},

				end: {
					month: "December",
					year: 2021,
				},

				highlights: [
					"Strengthened expertise in Laravel and MySQL through production projects.",
					"Participated in project planning and software delivery.",
					"Contributed to web solutions developed for company clients.",
				],

				technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "WordPress"],
			},
		],
	},
] as const satisfies Experience[];
