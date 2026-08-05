import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "#/components/footer";
import Header from "#/components/header";
import NotFound from "#/components/not-found";
import { CommandProvider } from "#/components/providers/command-provider";
import { ThemeProvider } from "#/components/providers/theme-provider";
import { BlockSeparator } from "#/components/ui/separator";
import appCss from "../styles.css?url";

const commonMetaDetails = {
	name: "Aboubakary Cissé",
	description:
		"Software artisan. Focusing on clean code and scalable architecture.",
	image: "/avatar.webp",
	url: "https://abubakr-cisse.is-a.dev/",
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: `${commonMetaDetails.name} - Software developer`,
			},
			{
				name: "description",
				content: "Experienced Software developer",
			},
			{
				name: "keywords",
				content: "aboubakary,cisse,abubakr,sidick",
			},
			{
				name: "author",
				content: commonMetaDetails.name,
			},
			{
				name: "og:title",
				content: commonMetaDetails.name,
			},
			{
				name: "og:description",
				content: commonMetaDetails.description,
			},
			{
				name: "og:image",
				content: commonMetaDetails.image,
			},
			{
				name: "og:image:width",
				content: "160",
			},
			{
				name: "og:image:height",
				content: "160",
			},
			{
				name: "og:image:alt",
				content: commonMetaDetails.name,
			},
			{
				name: "og:url",
				content: commonMetaDetails.url,
			},
			{
				name: "twitter:title",
				content: commonMetaDetails.name,
			},
			{
				name: "twitter:description",
				content: commonMetaDetails.description,
			},
			{
				name: "twitter:image",
				content: commonMetaDetails.image,
			},
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:url",
				content: commonMetaDetails.url,
			},
			{
				name: "twitter:author",
				content: "@Abubakr_Cisse",
			},
			{
				property: "profile:first_name",
				content: "Aboubakary",
			},
			{
				property: "profile:last_name",
				content: "Cissé",
			},
			{
				property: "profile:username",
				content: "aboubakary833",
			},
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "svg+xml",
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "ico",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "preload",
				href: "/pattern.webp",
				as: "image",
				fetchPriority: "high",
			},
		],
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>
					<CommandProvider>
						<div className="pb-1 w-full mx-auto max-w-4xl after:fixed after:bottom-0 after:z-10 after:mx-auto after:h-2 after:w-4xl after:bg-background after:border-t after:border-t-border">
							<Header />
							{children}
							<BlockSeparator />
							<Footer />
						</div>
					</CommandProvider>

					<TanStackDevtools
						config={{
							position: "bottom-left",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
						]}
					/>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
