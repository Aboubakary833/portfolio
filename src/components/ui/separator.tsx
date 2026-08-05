import type React from "react";
import { cn } from "#/lib/utils";

type SeparatorProps = Omit<React.ComponentProps<"div">, "children">;

export function BlockSeparator({
	className,
	title = "section-separator",
	...props
}: SeparatorProps) {
	return (
		<div
			className={cn("px-2 h-10 border-y border-y-border", className)}
			title={title}
			{...props}
		>
			<div className="w-full h-full bg-[repeating-linear-gradient(225deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed border-x border-x-border" />
		</div>
	);
}

export function InlineSeparator({
	className,
	title = "inline-separator",
	...props
}: SeparatorProps) {
	return (
		<div
			className={cn("mx-2 h-6 w-px bg-border", className)}
			title={title}
			{...props}
		/>
	);
}
