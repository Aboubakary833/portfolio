export type Education = {
	school: {
		name: string;
		website: string;
		logo: string;
		location: string;
	};

	program: string;

	start: {
		month: string;
		year: number;
	};

	end?: {
		month: string;
		year: number;
	};

	skills: readonly string[];
	tools: readonly string[];
};

export const educations = [
	{
		school: {
			name: "ALX Africa",
			website: "https://www.alxafrica.com",
			logo: "/schools/alx.png",
			location: "Remote",
		},

		program: "Software Engineering",

		start: {
			month: "January",
			year: 2023,
		},

		end: {
			month: "January",
			year: 2024,
		},

		skills: [
			"Computer Science fundamentals",
			"Algorithms & Data Structures",
			"Linux & Shell scripting",
			"Git & collaborative development",
			"Backend software engineering",
			"System design fundamentals",
			"Problem solving",
			"Professional software development",
		],

		tools: ["C", "Python", "Bash", "Git", "GitHub", "Linux", "Docker"],
	},
	{
		school: {
			name: "Simplon.co",
			website: "https://simplon.co",
			logo: "/schools/simplon.png",
			location: "Ouagadougou, Burkina Faso",
		},

		program: "Web Development bootcamp",

		start: {
			month: "October",
			year: 2020,
		},

		end: {
			month: "June",
			year: 2021,
		},

		skills: [
			"UI/UX fundamentals & wireframing",
			"Responsive web development",
			"Content Management Systems (CMS)",
			"Database design & SQL",
			"REST API development",
			"Back-end application development",
			"Agile software development",
		],

		tools: [
			"HTML",
			"CSS",
			"JavaScript",
			"PHP",
			"Laravel",
			"MySQL",
			"Git",
			"Agile",
			"Scrum",
		],
	},
] as const satisfies readonly Education[];
