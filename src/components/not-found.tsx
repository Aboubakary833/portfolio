import { ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "@tanstack/react-router";
import Button from "./ui/button";

export default function NotFound() {
	return (
		<main className="px-2">
			<div className="min-h-[calc(100dvh-300px)] border-x border-x-border">
				<div className="flex flex-col space-y-2 text-center">
					<div className="h-fit text-primary dark:text-soft">
						<Illustration className="mx-auto p-0 size-60 xs:size-70 sm:size-80" />
					</div>

					<div>
						<h1 className="text-6xl xs:text-7xl sm:text-8xl text-primary dark:text-soft font-bold">
							404
						</h1>
						<p>The requested page could not be found.</p>
					</div>

					<div className="p-4 mt-4">
						<Button
							variant="outline"
							nativeButton={false}
							render={
								<Link to="/">
									<span>Go back to home</span>
									<HugeiconsIcon icon={ArrowRight} className="size-4" />
								</Link>
							}
						/>
					</div>
				</div>
			</div>
		</main>
	);
}

function Illustration(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={192}
			height={150}
			viewBox="-20 0 190 150"
			fill="currentcolor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>404 Illustration icon</title>
			<path
				fillRule="inherit"
				clipRule="evenodd"
				d="M38.155 140.475L48.988 62.1108L92.869 67.0568L111.437 91.0118L103.396 148.121L38.155 140.475ZM84.013 94.0018L88.827 71.8068L54.046 68.3068L44.192 135.457L98.335 142.084L104.877 96.8088L84.013 94.0018ZM59.771 123.595C59.394 123.099 56.05 120.299 55.421 119.433C64.32 109.522 86.05 109.645 92.085 122.757C91.08 123.128 86.59 125.072 85.71 125.567C83.192 118.25 68.445 115.942 59.771 123.595ZM76.503 96.4988L72.837 99.2588L67.322 92.6168L59.815 96.6468L56.786 91.5778L63.615 88.1508L59.089 82.6988L64.589 79.0188L68.979 85.4578L76.798 81.5328L79.154 86.2638L72.107 90.0468L76.503 96.4988Z"
				fill="inherit"
			/>
		</svg>
	);
}
