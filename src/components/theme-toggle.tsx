import {
	ComputerIcon,
	Moon02Icon,
	Sun02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { type Theme, useTheme } from "./providers/theme-provider";
import Button from "./ui/button";

type ThemeButtonProps = {
	type: Theme;
	icon: HugeiconsIconProps["icon"];
	active?: boolean;
};

const themesItems: ThemeButtonProps[] = [
	{
		type: "system",
		icon: ComputerIcon,
	},
	{
		type: "light",
		icon: Sun02Icon,
	},
	{
		type: "dark",
		icon: Moon02Icon,
	},
];

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	});

	return (
		<div className="flex items-center justify-center border border-border rounded-full">
			{themesItems.map((item) => (
				<Button
					variant={mounted && item.type === theme ? "soft" : "ghost"}
					size="icon"
					key={item.type}
					onClick={() => setTheme(item.type)}
					title={item.type.replace(item.type[0], item.type[0].toUpperCase())}
					data-theme-toggle
				>
					<HugeiconsIcon icon={item.icon} />
				</Button>
			))}
		</div>
	);
}
