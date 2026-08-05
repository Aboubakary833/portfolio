import { CornerDownLeftIcon, Menu, Search } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "@tanstack/react-router";
import type React from "react";
import { type ComponentProps, useCallback, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { author } from "#/data/author";
import { useMutationObserver } from "#/hooks/use-mutation-observer";
import { dashAndLower } from "#/lib/strings";
import { AppLogo } from "./logos";
import { useCommand } from "./providers/command-provider";
import Button from "./ui/button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "./ui/command";

type CommandLinkItemType = "section" | "link";

type CommandLinkItem = {
	type: CommandLinkItemType;
	title: string;
	href: string;
	icon?: React.ReactNode;
	shortcut?: string;
	openInNewTab?: boolean;
};

const menuLinks = [
	{
		type: "section",
		title: "Overview",
		href: "#overview",
		shortcut: "GO",
	},
	{
		type: "section",
		title: "About me",
		href: "#about",
		shortcut: "GA",
	},
	{
		type: "section",
		title: "My Stack",
		href: "#stack",
		shortcut: "GS",
	},
	{
		type: "section",
		title: "Experience",
		href: "#experience",
		shortcut: "GX",
	},
	{
		type: "section",
		title: "Education",
		href: "#education",
		shortcut: "GE",
	},
	{
		type: "section",
		title: "Projects",
		href: "#projects",
		shortcut: "GP",
	},
] as const satisfies CommandLinkItem[];

export function AppCommand() {
	useHotkeys("ctrl+k", () => setOpen(!open), { preventDefault: true });

	const socialLinks = author.socialLinks.map(
		(link) =>
			({
				type: "link",
				title: link.name,
				href: link.url,
				openInNewTab: true,
				icon: <link.Icon className="size-5" />,
			}) satisfies CommandLinkItem,
	);
	const { open, setOpen } = useCommand();
	const [highlight, setHighlight] = useState<CommandLinkItemType>("section");
	const navigate = useNavigate();
	const handleNavigate = useCallback(
		(href: string, openInNewTab = false) => {
			if (openInNewTab) {
				const url = new URL(href);
				window.open(url, "_blank", "noopener");
			} else {
				navigate({ to: href, viewTransition: true });
				setOpen(false);
			}
		},
		[navigate, setOpen],
	);

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<Command className="p-0">
				<div className="p-1 pb-2 border-b border-b-border">
					<CommandInput placeholder="Search a link ..." />
				</div>

				<CommandList className="p-1">
					<CommandEmpty>No result found.</CommandEmpty>
					<AppCommandGroup
						title="Menu"
						items={menuLinks}
						onHighlight={setHighlight}
						onSelect={handleNavigate}
					/>
					<CommandSeparator />
					<AppCommandGroup
						title="Socials"
						items={socialLinks}
						onHighlight={setHighlight}
						onSelect={handleNavigate}
					/>
				</CommandList>

				<AppCommandFooter highlight={highlight} />
			</Command>
		</CommandDialog>
	);
}

export function AppCommandTrigger() {
	const { open, setOpen } = useCommand();

	return (
		<div>
			<Button
				variant="outline"
				className="px-0.75 hover:bg-border/40"
				onClick={() => setOpen(!open)}
				aria-label="Open command box"
			>
				<span className="px-1">
					<HugeiconsIcon icon={Search} className="size-5" />
				</span>
				<span className="p-1 inline-flex items-center gap-x-2 bg-border rounded-full text-sm font-medium">
					<kbd className="hidden in-[.os-macos_&]:inline">⌘</kbd>
					<kbd className="hidden not-[.os-macos_&]:inline">Ctrl</kbd>
					<kbd>K</kbd>
				</span>
			</Button>
		</div>
	);
}

type AppCommandGroupProps = {
	title: string;
	items: CommandLinkItem[];
	onHighlight: (type: CommandLinkItemType) => void;
	onSelect: (href: string, openInNewTab?: boolean) => void;
};

function AppCommandGroup({
	title,
	items,
	onHighlight,
	onSelect,
}: AppCommandGroupProps) {
	return (
		<CommandGroup title={title}>
			{items.map((item) => (
				<AppCommandItem
					title={item.title}
					icon={item.icon}
					shortcut={item.shortcut}
					onHighlight={() => onHighlight(item.type)}
					onSelect={() => onSelect(item.href, item.openInNewTab)}
					key={dashAndLower(item.title)}
				/>
			))}
		</CommandGroup>
	);
}

interface AppCommandItemProps
	extends Omit<ComponentProps<typeof CommandItem>, "title">,
		Pick<CommandLinkItem, "title" | "icon" | "shortcut"> {
	onHighlight?: () => void;
}

function AppCommandItem({
	title,
	icon,
	shortcut,
	onHighlight,
	...props
}: AppCommandItemProps) {
	const ref = useRef<HTMLDivElement>(null);

	useMutationObserver(ref, (mutations) => {
		mutations.forEach((mutation) => {
			if (
				mutation.type === "attributes" &&
				mutation.attributeName === "aria-selected" &&
				ref.current?.getAttribute("aria-selected") === "true"
			) {
				onHighlight?.();
			}
		});
	});

	return (
		<CommandItem
			className="w-full justify-between font-medium"
			ref={ref}
			{...props}
		>
			<div className="inline-flex items-center gap-x-2">
				{icon ?? <HugeiconsIcon icon={Menu} className="size-5" />}
				<span>{title}</span>
			</div>
			{shortcut && (
				<div className="opacity-50">
					<span>{shortcut}</span>
				</div>
			)}
		</CommandItem>
	);
}

type AppCommandFooterProps = {
	highlight: CommandLinkItemType;
};

function AppCommandFooter({ highlight }: AppCommandFooterProps) {
	const actions = {
		section: "Go to section",
		link: "Open link",
	} satisfies Record<CommandLinkItemType, string>;

	return (
		<div className="flex items-center justify-between border-t border-t-border">
			<div className="px-2">
				<AppLogo className="size-8 md:size-10 grayscale-100 opacity-75" />
			</div>

			<div className="px-2 inline-flex items-center gap-x-1">
				<span className="text-sm font-stretch-50%">{actions[highlight]}</span>
				<span className="px-1 py-0.5 bg-border rounded-xl">
					<HugeiconsIcon icon={CornerDownLeftIcon} className="size-4" />
				</span>
			</div>
		</div>
	);
}
