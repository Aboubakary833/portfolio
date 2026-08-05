import { Button as ButtonPrimitive } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "#/lib/utils";

const variants = cva(
	"inline-flex items-center justify-center rounded-full border bg-clip-padding font-medium outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer disabled:cursor-not-allowed hover:transition-colors",
	{
		variants: {
			variant: {
				primary:
					"bg-primary border-transparent text-foreground hover:bg-primary/80 dark:text-background",

				soft: "bg-soft border-transparent text-foreground hover:bg-secondary/80 dark:bg-soft dark:hover:bg-soft/80 dark:text-background",

				outline:
					"bg-transparent border-border hover:bg-border/75 hover:text-foreground",
				ghost:
					"bg-transparent border-transparent hover:bg-border hover:text-foreground",
			},
			size: {
				default:
					"h-9 gap-1 px-3 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				sm: "h-7 gap-1 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
				lg: "h-11 gap-1 px-4 text-base has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
				icon: "size-8 [&_svg:not([class*='size-'])]:size-4.5",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	},
);

function Button({
	variant = "primary",
	size = "default",
	className,
	...props
}: ButtonPrimitive.Props & VariantProps<typeof variants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(variants({ variant, size, className }))}
			{...props}
		/>
	);
}

export default Button;
