import { author } from "#/data/author";
import { dashAndLower } from "#/lib/strings";

type FooterDetailLink = {
	title: string;
	href: string;
};

type FooterDetail = {
	name: string;
	links: FooterDetailLink | FooterDetailLink[];
};

const details: FooterDetail[] = [
	{
		name: "Crafted by",
		links: {
			title: "@Abubakr_Cisse",
			href: author.socialLinks[0].url,
		},
	},
	{
		name: "Inspired by",
		links: [
			{
				title: "Chan Dai",
				href: "https://chandai.com/",
			},
			{
				title: "TailwindCSS",
				href: "https://tailwindcss.com/",
			},
			{
				title: "shadcn/ui",
				href: "https://ui.shadcn.com/",
			},
		],
	},
	{
		name: "Hosted on",
		links: {
			title: "Netlify",
			href: "https://netlify.com/",
		},
	},
	{
		name: "Source code",
		links: {
			title: "Github",
			href: `${author.socialLinks[2].url}/portfolio`,
		},
	},
];

export default function Footer() {
	return (
		<footer className="px-2">
			<div className="border-x border-x-border">
				<dl className="flex flex-col gap-4 py-8 mx-auto max-w-sm [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:opacity-75 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
					{details.map(({ name, links }) => (
						<div className="grid grid-cols-2 gap-4" key={dashAndLower(name)}>
							<dt>{name}</dt>
							<dd>
								{Array.isArray(links) ? (
									<DetailLinkList items={links} />
								) : (
									<DetailLink {...links} />
								)}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</footer>
	);
}

function DetailLinkList({ items }: { items: FooterDetailLink[] }) {
	return (
		<ul>
			{items.map(({ title, href }) => (
				<li key={dashAndLower(title)}>
					<DetailLink title={title} href={href} />
				</li>
			))}
		</ul>
	);
}

function DetailLink({ title, href }: FooterDetailLink) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener"
			className="text-balance hover:underline hover:decoration-2 hover:underline-offset-2"
		>
			{title}
		</a>
	);
}
