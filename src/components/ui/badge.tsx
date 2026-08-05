import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const badgeVariants = cva(
	"inline-flex h-6.5 min-w-7 shrink-0 items-center justify-center gap-1 bg-transparent overflow-hidden rounded-full border p-1 text-sm font-medium whitespace-nowrap hover:transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:size-4!",
	{
		variants: {
			variant: {
				outline: "border-border hover:bg-border/50",
				ghost: "border-transparent hover:bg-border",
			},
		},
		defaultVariants: {
			variant: "outline",
		},
	},
);

function Badge({
	className,
	variant = "outline",
	render,
	...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(
			{
				className: clsx(badgeVariants({ variant }), className),
			},
			props,
		),
		render,
		state: {
			slot: "badge",
			variant,
		},
	});
}

export { Badge, badgeVariants };
