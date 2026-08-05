import type { ComponentProps } from "react";
import { cn } from "#/lib/utils";

type SectionProps = ComponentProps<"section"> & {
	title?: string;
};

export default function Section({
	id,
	title,
	className,
	children,
	...props
}: SectionProps) {
	return (
		<section className={cn("px-2 scroll-mt-17", className)} id={id} {...props}>
			<div className="py-0.5 border-x border-x-border">
				{title && (
					<div className="px-2 border-b border-border">
						<h2 className="text-[1.75rem] sm:text-3xl font-bold">
							<a href={`#${id}`} id={id} className="space-x-1 hover:opacity-80">
								<span>#</span>
								<span>{title}</span>
							</a>
						</h2>
					</div>
				)}

				{children}
			</div>
		</section>
	);
}
