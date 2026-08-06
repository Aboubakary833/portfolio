import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, c as DialogPortal$1, d as DialogClose, f as DialogBackdrop, g as require_react, l as DialogPopup, n as DialogRoot, s as DialogTitle$1, u as DialogDescription$1 } from "../_libs/@base-ui/react+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as author, i as InlineSeparator, n as BlockSeparator, o as cn, r as Button$1, s as dashAndLower, t as AppLogo } from "./separator-CJ3NKliU.mjs";
import { c as HeadContent, d as ScriptOnce, f as lazyRouteComponent, g as useNavigate, h as Link, m as createRootRoute, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sl, d as dcr, f as eVr, h as mC, i as Qg, n as M8, t as KS, u as d3 } from "../_libs/hugeicons__core-free-icons.mjs";
import { t as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
import { t as B } from "../_libs/react-hotkeys-hook.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DF-5ERJb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var details = [
	{
		name: "Crafted by",
		links: {
			title: "@Abubakr_Cisse",
			href: author.socialLinks[0].url
		}
	},
	{
		name: "Inspired by",
		links: [
			{
				title: "Chan Dai",
				href: "https://chandai.com/"
			},
			{
				title: "TailwindCSS",
				href: "https://tailwindcss.com/"
			},
			{
				title: "shadcn/ui",
				href: "https://ui.shadcn.com/"
			}
		]
	},
	{
		name: "Hosted on",
		links: {
			title: "Netlify",
			href: "https://netlify.com/"
		}
	},
	{
		name: "Source code",
		links: {
			title: "Github",
			href: `${author.socialLinks[2].url}/portfolio`
		}
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-x border-x-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "flex flex-col gap-4 py-8 mx-auto max-w-sm [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:opacity-75 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2",
				children: details.map(({ name, links }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: Array.isArray(links) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLinkList, { items: links }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLink, { ...links }) })]
				}, dashAndLower(name)))
			})
		})
	});
}
function DetailLinkList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map(({ title, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLink, {
		title,
		href
	}) }, dashAndLower(title))) });
}
function DetailLink({ title, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noopener",
		className: "text-balance hover:underline hover:decoration-2 hover:underline-offset-2",
		children: title
	});
}
var useMutationObserver = (ref, callback, options = {
	attributes: true,
	characterData: true,
	childList: true,
	subtree: true
}) => {
	(0, import_react.useEffect)(() => {
		if (ref.current) {
			const observer = new MutationObserver(callback);
			observer.observe(ref.current, options);
			return () => observer.disconnect();
		}
	}, [
		ref,
		callback,
		options
	]);
};
var CommandProviderContext = (0, import_react.createContext)({
	open: false,
	setOpen: () => {}
});
function CommandProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandProviderContext, {
		value: {
			open,
			setOpen
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommand, {})]
	});
}
function useCommand() {
	const context = (0, import_react.useContext)(CommandProviderContext);
	if (context === void 0) throw new Error("useCommand must be used within a CommandProviderContext");
	return context;
}
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogRoot, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogBackdrop, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPopup, {
		"data-slot": "dialog-content",
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, { icon: Sl }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("cn-font-heading text-base leading-none font-medium", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fieldset", {
		"data-slot": "input-group",
		className: cn("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
		...props
	});
}
var inputGroupAddonVariants = cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	const handleActivate = (target, currentTarget) => {
		if (target.closest("button")) return;
		currentTarget.parentElement?.querySelector("input")?.focus();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fieldset", {
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn(inputGroupAddonVariants({ align }), className),
		onClick: (e) => handleActivate(e.target, e.currentTarget),
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") handleActivate(e.target, e.currentTarget);
		},
		...props
	});
}
cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function Command$1({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
		"data-slot": "command",
		className: cn("flex size-full flex-col overflow-hidden outline-0 border border-border rounded-xl! bg-background p-1 text-foreground", className),
		...props
	});
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog$1, {
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
			className: "sr-only",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: description })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: cn("top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0 md:max-w-md", className),
			showCloseButton,
			children
		})]
	});
}
function CommandInput({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "command-input-wrapper",
		className: "p-1 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InputGroup, {
			className: "h-8! rounded-lg! border-border bg-border/50 shadow-none! *:data-[slot=input-group-addon]:pl-2!",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
				"data-slot": "command-input",
				className: cn("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
				...props
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
				icon: dcr,
				className: "size-4 shrink-0 opacity-50"
			}) })]
		})
	});
}
function CommandList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
		"data-slot": "command-list",
		className: cn("max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none scrollbar-thin scrollbar-track-border/10 scrollbar-thumb-border/75", className),
		...props
	});
}
function CommandEmpty({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
		"data-slot": "command-empty",
		className: cn("py-6 text-center text-sm", className),
		...props
	});
}
function CommandGroup({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
		"data-slot": "command-group",
		className: cn("overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:opacity-75", className),
		...props
	});
}
function CommandSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
		"data-slot": "command-separator",
		className: cn("-mx-1 h-px bg-border", className),
		...props
	});
}
function CommandItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
		"data-slot": "command-item",
		className: cn("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-border/50 data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground", className),
		...props,
		children
	});
}
var menuLinks = [
	{
		type: "section",
		title: "Overview",
		href: "#overview",
		shortcut: "GO"
	},
	{
		type: "section",
		title: "About me",
		href: "#about",
		shortcut: "GA"
	},
	{
		type: "section",
		title: "My Stack",
		href: "#stack",
		shortcut: "GS"
	},
	{
		type: "section",
		title: "Experience",
		href: "#experience",
		shortcut: "GX"
	},
	{
		type: "section",
		title: "Education",
		href: "#education",
		shortcut: "GE"
	},
	{
		type: "section",
		title: "Projects",
		href: "#projects",
		shortcut: "GP"
	}
];
function AppCommand() {
	B("ctrl+k", () => setOpen(!open), { preventDefault: true });
	const socialLinks = author.socialLinks.map((link) => ({
		type: "link",
		title: link.name,
		href: link.url,
		openInNewTab: true,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.Icon, { className: "size-5" })
	}));
	const { open, setOpen } = useCommand();
	const [highlight, setHighlight] = (0, import_react.useState)("section");
	const navigate = useNavigate();
	const handleNavigate = (0, import_react.useCallback)((href, openInNewTab = false) => {
		if (openInNewTab) {
			const url = new URL(href);
			window.open(url, "_blank", "noopener");
		} else {
			navigate({
				to: href,
				viewTransition: true
			});
			setOpen(false);
		}
	}, [navigate, setOpen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandDialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, {
			className: "p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-1 pb-2 border-b border-b-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Search a link ..." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
					className: "p-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No result found." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommandGroup, {
							title: "Menu",
							items: menuLinks,
							onHighlight: setHighlight,
							onSelect: handleNavigate
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommandGroup, {
							title: "Socials",
							items: socialLinks,
							onHighlight: setHighlight,
							onSelect: handleNavigate
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommandFooter, { highlight })
			]
		})
	});
}
function AppCommandTrigger() {
	const { open, setOpen } = useCommand();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button$1, {
		variant: "outline",
		className: "px-0.75 hover:bg-border/40",
		onClick: () => setOpen(!open),
		"aria-label": "Open command box",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "px-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
				icon: dcr,
				className: "size-5"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "p-1 inline-flex items-center gap-x-2 bg-border rounded-full text-sm font-medium",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "hidden in-[.os-macos_&]:inline",
					children: "⌘"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
					className: "hidden not-[.os-macos_&]:inline",
					children: "Ctrl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" })
			]
		})]
	}) });
}
function AppCommandGroup({ title, items, onHighlight, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
		title,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommandItem, {
			title: item.title,
			icon: item.icon,
			shortcut: item.shortcut,
			onHighlight: () => onHighlight(item.type),
			onSelect: () => onSelect(item.href, item.openInNewTab)
		}, dashAndLower(item.title)))
	});
}
function AppCommandItem({ title, icon, shortcut, onHighlight, ...props }) {
	const ref = (0, import_react.useRef)(null);
	useMutationObserver(ref, (mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === "attributes" && mutation.attributeName === "aria-selected" && ref.current?.getAttribute("aria-selected") === "true") onHighlight?.();
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
		className: "w-full justify-between font-medium",
		ref,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "inline-flex items-center gap-x-2",
			children: [icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
				icon: M8,
				className: "size-5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title })]
		}), shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "opacity-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shortcut })
		})]
	});
}
function AppCommandFooter({ highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-t border-t-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLogo, { className: "size-8 md:size-10 grayscale-100 opacity-75" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-2 inline-flex items-center gap-x-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-stretch-50%",
				children: {
					section: "Go to section",
					link: "Open link"
				}[highlight]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-1 py-0.5 bg-border rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
					icon: KS,
					className: "size-4"
				})
			})]
		})]
	});
}
function getThemeScript(storageKey, defaultTheme) {
	return `(function(){try{var t=localStorage.getItem(${JSON.stringify(storageKey)});if(t!=='light'&&t!=='dark'&&t!=='system'){t=${JSON.stringify(defaultTheme)}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.classList.add(r);e.style.colorScheme=r}catch(e){}})();`;
}
var ThemeProviderContext = (0, import_react.createContext)({
	theme: "system",
	setTheme: () => {}
});
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.remove("light", "dark");
	const resolved = theme === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : theme;
	root.classList.add(resolved);
	root.style.colorScheme = resolved;
}
function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme" }) {
	const [theme, setThemeState] = (0, import_react.useState)(defaultTheme);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem(storageKey);
		setThemeState(stored === "light" || stored === "dark" || stored === "system" ? stored : defaultTheme);
		setMounted(true);
	}, [defaultTheme, storageKey]);
	(0, import_react.useEffect)(() => {
		if (!mounted) return;
		applyTheme(theme);
	}, [theme, mounted]);
	(0, import_react.useEffect)(() => {
		if (!mounted || theme !== "system") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyTheme("system");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [theme, mounted]);
	const setTheme = (next) => {
		localStorage.setItem(storageKey, next);
		setThemeState(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProviderContext, {
		value: {
			theme,
			setTheme
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptOnce, { children: getThemeScript(storageKey, defaultTheme) }), children]
	});
}
function useTheme() {
	const context = (0, import_react.useContext)(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
}
var themesItems = [
	{
		type: "system",
		icon: Qg
	},
	{
		type: "light",
		icon: eVr
	},
	{
		type: "dark",
		icon: d3
	}
];
function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center border border-border rounded-full",
		children: themesItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
			variant: mounted && item.type === theme ? "soft" : "ghost",
			size: "icon",
			onClick: () => setTheme(item.type),
			title: item.type.replace(item.type[0], item.type[0].toUpperCase()),
			"data-theme-toggle": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, { icon: item.icon })
		}, item.type))
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 pt-2 bg-background z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-2 bg-background border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-2 flex items-center justify-between border-x border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLogo, { className: "size-13 md:size-15" })
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppCommandTrigger, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
					]
				})]
			})
		})
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "px-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[calc(100dvh-300px)] border-x border-x-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col space-y-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-fit text-primary dark:text-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Illustration, { className: "mx-auto p-0 size-60 xs:size-70 sm:size-80" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-6xl xs:text-7xl sm:text-8xl text-primary dark:text-soft font-bold",
						children: "404"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The requested page could not be found." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 mt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
							variant: "outline",
							nativeButton: false,
							render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Go back to home" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
									icon: mC,
									className: "size-4"
								})]
							})
						})
					})
				]
			})
		})
	});
}
function Illustration(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: 192,
		height: 150,
		viewBox: "-20 0 190 150",
		fill: "currentcolor",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "404 Illustration icon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "inherit",
			clipRule: "evenodd",
			d: "M38.155 140.475L48.988 62.1108L92.869 67.0568L111.437 91.0118L103.396 148.121L38.155 140.475ZM84.013 94.0018L88.827 71.8068L54.046 68.3068L44.192 135.457L98.335 142.084L104.877 96.8088L84.013 94.0018ZM59.771 123.595C59.394 123.099 56.05 120.299 55.421 119.433C64.32 109.522 86.05 109.645 92.085 122.757C91.08 123.128 86.59 125.072 85.71 125.567C83.192 118.25 68.445 115.942 59.771 123.595ZM76.503 96.4988L72.837 99.2588L67.322 92.6168L59.815 96.6468L56.786 91.5778L63.615 88.1508L59.089 82.6988L64.589 79.0188L68.979 85.4578L76.798 81.5328L79.154 86.2638L72.107 90.0468L76.503 96.4988Z",
			fill: "inherit"
		})]
	});
}
var styles_default = "/assets/styles-DNG4czLh.css";
var commonMetaDetails = {
	name: "Aboubakary Cissé",
	description: "Software artisan. Focusing on clean code and scalable architecture.",
	image: "/avatar.webp",
	url: "https://abubakr-cisse.is-a.dev/"
};
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${commonMetaDetails.name} - Software developer` },
			{
				name: "description",
				content: "Experienced Software developer"
			},
			{
				name: "keywords",
				content: "aboubakary,cisse,abubakr,sidick"
			},
			{
				name: "author",
				content: commonMetaDetails.name
			},
			{
				name: "og:title",
				content: commonMetaDetails.name
			},
			{
				name: "og:description",
				content: commonMetaDetails.description
			},
			{
				name: "og:image",
				content: commonMetaDetails.image
			},
			{
				name: "og:image:width",
				content: "160"
			},
			{
				name: "og:image:height",
				content: "160"
			},
			{
				name: "og:image:alt",
				content: commonMetaDetails.name
			},
			{
				name: "og:url",
				content: commonMetaDetails.url
			},
			{
				name: "twitter:title",
				content: commonMetaDetails.name
			},
			{
				name: "twitter:description",
				content: commonMetaDetails.description
			},
			{
				name: "twitter:image",
				content: commonMetaDetails.image
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:url",
				content: commonMetaDetails.url
			},
			{
				name: "twitter:author",
				content: "@Abubakr_Cisse"
			},
			{
				property: "profile:first_name",
				content: "Aboubakary"
			},
			{
				property: "profile:last_name",
				content: "Cissé"
			},
			{
				property: "profile:username",
				content: "aboubakary833"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "ico"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preload",
				href: "/pattern.webp",
				as: "image",
				fetchPriority: "high"
			}
		]
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pb-1 w-full mx-auto max-w-4xl after:fixed after:bottom-0 after:z-10 after:mx-auto after:h-2 after:w-4xl after:bg-background after:border-t after:border-t-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter = () => import("./routes-I2_WxeQw.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
