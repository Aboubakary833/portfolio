import type { ComponentProps } from "react";
import { dashAndLower } from "#/lib/strings";
import { cn } from "#/lib/utils";
import { Badge } from "./ui/badge";

export type TagsListProps = Omit<ComponentProps<"ul">, "children"> & {
	items: string[] | readonly string[];
};

export function TagsList({ items, className, ...props }: TagsListProps) {
	return (
		<ul className={cn("w-full flex flex-wrap gap-1", className)} {...props}>
			{items.map((item) => (
				<li key={dashAndLower(item)}>
					<Badge className="opacity-75">{item}</Badge>
				</li>
			))}
		</ul>
	);
}
