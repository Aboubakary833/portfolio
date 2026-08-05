import {
	type IconType,
	SiAdonisjs,
	SiBaseui,
	SiBun,
	SiDocker,
	SiGit,
	SiGithub,
	SiGo,
	SiHostinger,
	SiInertia,
	SiJavascript,
	SiLaravel,
	SiMysql,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiOvh,
	SiPhp,
	SiPostgresql,
	SiRadixui,
	SiReact,
	SiReactrouter,
	SiRedis,
	SiRender,
	SiShadcnui,
	SiSqlite,
	SiTailwindcss,
	SiTanstack,
	SiTypescript,
	SiVercel,
	SiVite,
} from "@icons-pack/react-simple-icons";

type StackItem = {
	name: string;
	url: string;
	icon: IconType;
};

export type StackGroup = {
	name: string;
	items: StackItem[];
};

const StackTable: StackGroup[] = [
	{
		name: "Languages",
		items: [
			{
				name: "JavaScript",
				url: "https://developer.mozilla.org/docs/Web/JavaScript",
				icon: SiJavascript,
			},
			{
				name: "TypeScript",
				url: "https://www.typescriptlang.org/",
				icon: SiTypescript,
			},
			{
				name: "PHP",
				url: "https://www.php.net/",
				icon: SiPhp,
			},
			{
				name: "Go",
				url: "https://go.dev/",
				icon: SiGo,
			},
		],
	},

	{
		name: "Frontend",
		items: [
			{
				name: "React",
				url: "https://react.dev/",
				icon: SiReact,
			},
			{
				name: "TailwindCSS",
				url: "https://tailwindcss.com/",
				icon: SiTailwindcss,
			},
			{
				name: "Next.js",
				url: "https://nextjs.org/",
				icon: SiNextdotjs,
			},
			{
				name: "TanStack",
				url: "https://tanstack.com/",
				icon: SiTanstack,
			},
			{
				name: "React Router",
				url: "https://reactrouter.com/",
				icon: SiReactrouter,
			},
			{
				name: "Vite",
				url: "https://vite.dev/",
				icon: SiVite,
			},
			{
				name: "Inertia",
				url: "https://inertiajs.com/",
				icon: SiInertia,
			},
			{
				name: "Base UI",
				url: "https://base-ui.com/",
				icon: SiBaseui,
			},
			{
				name: "Radix UI",
				url: "https://www.radix-ui.com/",
				icon: SiRadixui,
			},
			{
				name: "shadcn/ui",
				url: "https://ui.shadcn.com/",
				icon: SiShadcnui,
			},
		],
	},

	{
		name: "Backend",
		items: [
			{
				name: "Node.js",
				url: "https://nodejs.org/",
				icon: SiNodedotjs,
			},
			{
				name: "Bun",
				url: "https://bun.sh/",
				icon: SiBun,
			},
			{
				name: "Laravel",
				url: "https://laravel.com/",
				icon: SiLaravel,
			},
			{
				name: "AdonisJS",
				url: "https://adonisjs.com/",
				icon: SiAdonisjs,
			},
			{
				name: "Nginx",
				url: "https://nginx.org/",
				icon: SiNginx,
			},
		],
	},

	{
		name: "Database",
		items: [
			{
				name: "MySQL",
				url: "https://www.mysql.com/",
				icon: SiMysql,
			},
			{
				name: "PostgreSQL",
				url: "https://www.postgresql.org/",
				icon: SiPostgresql,
			},
			{
				name: "SQLite",
				url: "https://www.sqlite.org/",
				icon: SiSqlite,
			},
			{
				name: "Redis",
				url: "https://redis.io/",
				icon: SiRedis,
			},
		],
	},

	{
		name: "Workflow & Hosting",
		items: [
			{
				name: "Git",
				url: "https://git-scm.com/",
				icon: SiGit,
			},
			{
				name: "Docker",
				url: "https://www.docker.com/",
				icon: SiDocker,
			},
			{
				name: "GitHub",
				url: "https://github.com/",
				icon: SiGithub,
			},
			{
				name: "OVHcloud",
				url: "https://www.ovhcloud.com/",
				icon: SiOvh,
			},
			{
				name: "Render",
				url: "https://render.com/",
				icon: SiRender,
			},
			{
				name: "Vercel",
				url: "https://vercel.com/",
				icon: SiVercel,
			},
			{
				name: "Hostinger",
				url: "https://www.hostinger.com/",
				icon: SiHostinger,
			},
		],
	},
];

export default StackTable;
