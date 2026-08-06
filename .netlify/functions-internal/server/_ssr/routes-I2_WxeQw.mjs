import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as CollapsibleRoot, g as require_react, h as mergeProps, i as CollapsibleTrigger$1, r as CollapsiblePanel, t as useRender } from "../_libs/@base-ui/react+[...].mjs";
import { C as SiJavascript, D as SiGithub, E as SiGo, M as SiBun, N as SiBaseui, O as SiGit, P as SiAdonisjs, S as SiLaravel, T as SiHostinger, _ as SiOvh, b as SiNextdotjs, c as SiSqlite, d as SiRedis, f as SiReactrouter, g as SiPhp, h as SiPostgresql, i as SiTypescript, k as SiDocker, l as SiShadcnui, m as SiRadixui, n as SiVite, o as SiTanstack, p as SiReact, r as SiVercel, s as SiTailwindcss, u as SiRender, v as SiNodedotjs, w as SiInertia, x as SiMysql, y as SiNginx } from "../_libs/icons-pack__react-simple-icons.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as author, i as InlineSeparator, n as BlockSeparator, o as cn, r as Button$1, s as dashAndLower } from "./separator-CJ3NKliU.mjs";
import { _ as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as z2, c as YIr, g as sDr, l as _c, m as ik, o as Tn, p as fBr, r as QE, s as Y5, v as z5 } from "../_libs/hugeicons__core-free-icons.mjs";
import { t as HugeiconsIcon } from "../_libs/hugeicons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-I2_WxeQw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Section({ id, title, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("px-2 scroll-mt-17", className),
		id,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-0.5 border-x border-x-border",
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-2 border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[1.75rem] sm:text-3xl font-bold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${id}`,
						id,
						className: "space-x-1 hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "#" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title })]
					})
				})
			}), children]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "About me",
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-2.5 py-4 text-base",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Hi👋🏾, my name is ",
					author.name,
					";"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: author.about })
			]
		})
	});
}
var badgeVariants = cva("inline-flex h-6.5 min-w-7 shrink-0 items-center justify-center gap-1 bg-transparent overflow-hidden rounded-full border p-1 text-sm font-medium whitespace-nowrap hover:transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:size-4!", {
	variants: { variant: {
		outline: "border-border hover:bg-border/50",
		ghost: "border-transparent hover:bg-border"
	} },
	defaultVariants: { variant: "outline" }
});
function Badge({ className, variant = "outline", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: clsx(badgeVariants({ variant }), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
function TagsList({ items, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: cn("w-full flex flex-wrap gap-1", className),
		...props,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
			className: "opacity-75",
			children: item
		}) }, dashAndLower(item)))
	});
}
function Collapsible$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleRoot, { ...props });
}
function CollapsibleTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger$1, { ...props });
}
function CollapsibleContent({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsiblePanel, { ...props });
}
function CollapsibleItemsBlock({ id, org, items, location }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-2 space-y-3 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-0.5 border border-border rounded-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: org.logo,
					alt: `${org.name} logo`,
					className: "size-8 xs:size-6 border border-border rounded-sm",
					fetchPriority: "high"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-1.5 flex-1 xs:flex xs:justify-between xs:items-center xs:gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: org.website,
					className: "hover:underline hover:decoration-2 hover:underline-offset-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base xs:text-lg font-medium",
						children: org.name
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "sr-only",
					children: "Location"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-sm opacity-75",
					children: location
				})] })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: items.map(({ title, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleItem, {
				title,
				orgName: org.name,
				...props
			}, `${id}-${dashAndLower(title)}`))
		})]
	});
}
function CollapsibleItem({ title, details, content, tags, orgName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible$1, {
		className: "group space-y-1 border-l-2 border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleItemTrigger, {
				title,
				details
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleItemContent, { content }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsList, {
				className: "px-1.5 py-1",
				items: tags,
				"aria-labelledby": `${orgName} tags`
			})
		]
	});
}
function CollapsibleItemTrigger({ title, details }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "block p-1 w-full cursor-pointer hover:bg-border/40 hover:transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pl-1 space-y-1 xs:space-y-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "w-fit text-sm font-medium text-balance xs:text-base",
					children: title
				}), details.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "xs:flex xs:items-center",
					children: details.map(({ name, value }, idx, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm opacity-75",
							children: value
						})]
					}), idx < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InlineSeparator, { className: "hidden xs:block h-4" })] }, dashAndLower(name)))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "xs:py-1 h-fit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
					icon: Tn,
					className: "size-4 transition-transform group-data-open:-rotate-180 group-data-close:rotate-0"
				})
			})]
		})
	}) });
}
function CollapsibleItemContent({ content }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
		className: "p-2 text-sm opacity-90 overflow-hidden group-data-open:animate-slide-down group-data-closed:animate-slide-up",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pl-2 space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
				className: "font-medium",
				children: [content.title, ":"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: content.highlights.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "inline-flex space-x-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " - " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: highlight })]
				}, dashAndLower(highlight)))
			})]
		})
	});
}
var educations = [{
	school: {
		name: "ALX Africa",
		website: "https://www.alxafrica.com",
		logo: "/schools/alx.png",
		location: "Remote"
	},
	program: "Software Engineering",
	start: {
		month: "January",
		year: 2023
	},
	end: {
		month: "January",
		year: 2024
	},
	skills: [
		"Computer Science fundamentals",
		"Algorithms & Data Structures",
		"Linux & Shell scripting",
		"Git & collaborative development",
		"Backend software engineering",
		"System design fundamentals",
		"Problem solving",
		"Professional software development"
	],
	tools: [
		"C",
		"Python",
		"Bash",
		"Git",
		"GitHub",
		"Linux",
		"Docker"
	]
}, {
	school: {
		name: "Simplon.co",
		website: "https://simplon.co",
		logo: "/schools/simplon.png",
		location: "Ouagadougou, Burkina Faso"
	},
	program: "Web Development bootcamp",
	start: {
		month: "October",
		year: 2020
	},
	end: {
		month: "June",
		year: 2021
	},
	skills: [
		"UI/UX fundamentals & wireframing",
		"Responsive web development",
		"Content Management Systems (CMS)",
		"Database design & SQL",
		"REST API development",
		"Back-end application development",
		"Agile software development"
	],
	tools: [
		"HTML",
		"CSS",
		"JavaScript",
		"PHP",
		"Laravel",
		"MySQL",
		"Git",
		"Agile",
		"Scrum"
	]
}];
/**
* Format a period range into renderable string
*/
function formatDetailPeriod(start, end) {
	return `${start.month} ${start.year} - ${end ? `${end.month} ${end.year}` : "Ongoing"}`;
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Education",
		id: "education",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border",
			children: educations.map(({ school, program, start, end, skills, tools }) => ({
				id: dashAndLower(program),
				org: {
					name: school.name,
					website: school.website,
					logo: school.logo
				},
				location: school.location,
				items: [{
					title: program,
					details: [{
						name: "Training period",
						value: formatDetailPeriod(start, end)
					}],
					content: {
						title: "Acquired skills",
						highlights: skills
					},
					tags: tools
				}]
			})).map((props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleItemsBlock, { ...props }, props.id))
		})
	});
}
var experiences = [
	{
		id: "legrand-web-services",
		company: {
			name: "LeGrand Web Services",
			website: "https://legrandwebservices.com",
			logo: "/companies/legrandweb.png"
		},
		location: "Ouagadougou, Burkina Faso",
		roles: [{
			title: "Fullstack Developer",
			type: "Full-time",
			start: {
				month: "January",
				year: 2024
			},
			end: {
				month: "April",
				year: 2024
			},
			highlights: ["Contributed to the development and launch of the company website.", "Developed WordPress websites for client projects."],
			technologies: [
				"TypeScript",
				"Node.js",
				"Next.js",
				"shadcn/ui",
				"GSAP",
				"WordPress"
			]
		}]
	},
	{
		id: "horinfo",
		company: {
			name: "Horinfo",
			website: "#",
			logo: "/companies/horinfo.png"
		},
		location: "Ouagadougou, Burkina Faso",
		roles: [{
			title: "Fullstack Developer",
			type: "Full-time",
			start: {
				month: "April",
				year: 2022
			},
			end: {
				month: "May",
				year: 2023
			},
			highlights: ["Designed and developed an event management platform capable of handling thousands of participant registrations.", "Contributed to the development of an ERP system for a public-sector organization."],
			technologies: [
				"TypeScript",
				"JavaScript",
				"React",
				"Inertia.js",
				"PHP",
				"Laravel"
			]
		}]
	},
	{
		id: "smart-touch-group",
		company: {
			name: "Smart Touch Group",
			website: "#",
			logo: "/companies/smtgroup.png"
		},
		location: "Ouagadougou, Burkina Faso",
		roles: [{
			title: "Software Developer Intern",
			type: "Internship",
			start: {
				month: "July",
				year: 2021
			},
			end: {
				month: "December",
				year: 2021
			},
			highlights: [
				"Strengthened expertise in Laravel and MySQL through production projects.",
				"Participated in project planning and software delivery.",
				"Contributed to web solutions developed for company clients."
			],
			technologies: [
				"JavaScript",
				"PHP",
				"Laravel",
				"MySQL",
				"WordPress"
			]
		}]
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Experience",
		id: "experience",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-y divide-border",
			children: experiences.map(({ id, company, location, roles }) => ({
				id,
				org: company,
				location,
				items: roles.map(({ title, type, start, end, highlights, technologies }) => ({
					title,
					details: [{
						name: "Employment type",
						value: type
					}, {
						name: "Employment period",
						value: formatDetailPeriod(start, end)
					}],
					content: {
						title: "Achievements",
						highlights
					},
					tags: technologies
				}))
			})).map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleItemsBlock, { ...block }, block.id))
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-74 xs:h-68 md:h-70 flex flex-col items-center justify-end xs:items-start border-x border-border before:absolute before:top-0 before:left-0 before:w-full before:h-34 before:xs:h-44 before:sm:h-46 before:md:h-48 before:bg-[url('/pattern.webp')] before:opacity-30 before:border-b before:border-b-border dark:before:opacity-100 dark:before:brightness-0 dark:before:invert-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full flex flex-col items-center xs:flex-row xs:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-36 md:size-40 overflow-hidden ring-4 ring-soft ring-offset-2 ring-offset-background rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/avatar.webp",
								alt: `${author.name} ghibli-style avatar`,
								fetchPriority: "high"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pb-4 w-full text-center xs:pb-0 xs:text-start xs:h-24 sm:h-22 xs:border-l xs:border-l-border xs:divide-y divide-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "xs:px-2 xs:py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-[1.75rem] sm:text-3xl font-bold",
								children: author.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description, {})]
					})]
				})
			})
		})
	});
}
function Description() {
	const [, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 2500);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full inline-flex justify-center items-center xs:p-2 xs:justify-start",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex items-center space-x-2 w-45 xs:w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Software" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {})]
		})
	});
}
function Overview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "border-b border-b-border",
		id: "overview",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-1 pb-0 space-y-1 xs:p-2 xs:pb-0 md:pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: sDr,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ItemText, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: author.role }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-px text-border xs:px-1",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-75",
								children: "Freelance"
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: Y5,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLink, {
							href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(author.address)}`,
							children: author.address
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: YIr,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemDecoder, {
							value: author.phone,
							render: (decodedValue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLink, {
								href: `tel:${decodedValue.replaceAll(/\s/g, "")}`,
								children: decodedValue
							})
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-1 space-y-1 xs:p-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: z2,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemDecoder, {
							value: author.email,
							render: (decodedValue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemLink, {
								href: `mailto:${decodedValue}`,
								children: decodedValue
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: fBr,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: author.status })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
						icon: z5,
						render: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemText, { children: author.pronoun })
					})
				]
			})]
		})
	});
}
function Item({ className, icon, render, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: clsx("p-1 w-full inline-flex items-center space-x-2", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "p-0.5 inline-flex items-center justify-center border border-border rounded-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
				icon,
				className: "size-6"
			})
		}), render]
	});
}
function ItemText({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: clsx("inline text-balance", className),
		...props
	});
}
function ItemLink({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: clsx("text-balance hover:underline hover:decoration-2 hover:underline-offset-2", className),
		target: "_blank",
		rel: "noopener",
		...props
	});
}
function ItemDecoder({ value, render }) {
	return render(atob(value));
}
function Card({ className, size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card",
		"data-size": size,
		className: clsx("group/card flex flex-col gap-(--card-spacing) overflow-hidden bg-background py-(--card-spacing) text-sm text-foreground ring-1 ring-border [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 data-[size=sm]:[--card-spacing:--spacing(2)] data-[size=sm]:has-data-[slot=card-footer]:pb-0", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-header",
		className: clsx("grid auto-rows-min items-start gap-1 px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-title",
		className: clsx("text-lg font-medium", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-content",
		className: clsx("px-(--card-spacing)", className),
		...props
	});
}
function CardFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "card-footer",
		className: clsx("flex items-center p-(--card-spacing) border-t border-border", className),
		...props
	});
}
function ProjectCard({ title, description, tags, externalUrls }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "py-2 justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
				className: "px-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: title })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "px-2 space-y-(--card-spacing)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base opacity-80",
					children: description
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagsList, {
					items: tags,
					"aria-labelledby": `${title} tags`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardFooter, {
				className: "p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [externalUrls?.github && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCardLink, {
						type: "Github",
						url: externalUrls.github
					}), externalUrls?.live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCardLink, {
						type: "Live",
						url: externalUrls.live
					})]
				})
			})
		]
	});
}
function ProjectCardLink({ type, url }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button$1, {
		variant: "outline",
		nativeButton: false,
		render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: url,
			target: "_blank",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
					icon: type === "Github" ? QE : _c,
					className: "size-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: type }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
					icon: ik,
					className: "size-4"
				})
			]
		})
	});
}
var toGithubUrl = (repo) => {
	if (repo === "") throw new Error("repo name can't be empty string");
	return `${author.socialLinks.find((url) => url.id === "github").url}/${repo}`;
};
var projects = [
	{
		id: "codexa",
		title: "Codexa",
		description: "A terminal-based application designed to help developers quickly access concise, practical code snippets and common development patterns, without the verbosity of traditional documentation.",
		tags: [
			"Go",
			"Bubbletea",
			"Cobra",
			"SQLite",
			"Hexagonal Architecture",
			"CLI",
			"TUI"
		],
		externalUrls: { github: toGithubUrl("codexa") }
	},
	{
		id: "comu",
		title: "Comu",
		description: "A modular monolith backend designed with Hexagonal Architecture and Domain-Driven Design principles, providing scalable APIs for authentication, users, posts, notifications, and more.",
		tags: [
			"Go",
			"Echo",
			"MySQL",
			"Redis",
			"Docker",
			"REST API",
			"Clean architecture"
		],
		externalUrls: { github: toGithubUrl("comu") }
	},
	{
		id: "apen",
		title: "Apen Burkina",
		description: "A professional accreditation management platform that streamlines certification workflows through a secure administrative dashboard. I worked on it as a consultant for Total-Innovation.",
		tags: [
			"PHP",
			"MySQL",
			"Laravel",
			"React",
			"Inertia",
			"shadcn/ui"
		],
		externalUrls: { live: "https://apen.bf" }
	},
	{
		id: "clean-city",
		title: "Clean City",
		description: "A business website and e-commerce platform allowing customers to purchase cleaning products, request waste collection quotes, and manage service inquiries online.",
		tags: [
			"PHP",
			"MySQL",
			"Laravel",
			"React",
			"E-commerce"
		],
		externalUrls: { live: "https://cleancity.bf" }
	}
];
function Project() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Projects",
		id: "projects",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5",
			children: projects.map(({ id, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { ...props }, id))
		})
	});
}
function Socials() {
	const { socialLinks } = author;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-2 border-x border-x-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3",
				children: socialLinks.map(({ id, name, url, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: url,
					className: "flex items-center justify-between p-2 border border-border hover:transition-colors hover:bg-border/50",
					target: "_blank",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center space-x-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: name })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HugeiconsIcon, {
						icon: ik,
						className: "size-5"
					}) })]
				}) }, id))
			})
		})
	});
}
var StackTable = [
	{
		name: "Languages",
		items: [
			{
				name: "JavaScript",
				url: "https://developer.mozilla.org/docs/Web/JavaScript",
				icon: SiJavascript
			},
			{
				name: "TypeScript",
				url: "https://www.typescriptlang.org/",
				icon: SiTypescript
			},
			{
				name: "PHP",
				url: "https://www.php.net/",
				icon: SiPhp
			},
			{
				name: "Go",
				url: "https://go.dev/",
				icon: SiGo
			}
		]
	},
	{
		name: "Frontend",
		items: [
			{
				name: "React",
				url: "https://react.dev/",
				icon: SiReact
			},
			{
				name: "TailwindCSS",
				url: "https://tailwindcss.com/",
				icon: SiTailwindcss
			},
			{
				name: "Next.js",
				url: "https://nextjs.org/",
				icon: SiNextdotjs
			},
			{
				name: "TanStack",
				url: "https://tanstack.com/",
				icon: SiTanstack
			},
			{
				name: "React Router",
				url: "https://reactrouter.com/",
				icon: SiReactrouter
			},
			{
				name: "Vite",
				url: "https://vite.dev/",
				icon: SiVite
			},
			{
				name: "Inertia",
				url: "https://inertiajs.com/",
				icon: SiInertia
			},
			{
				name: "Base UI",
				url: "https://base-ui.com/",
				icon: SiBaseui
			},
			{
				name: "Radix UI",
				url: "https://www.radix-ui.com/",
				icon: SiRadixui
			},
			{
				name: "shadcn/ui",
				url: "https://ui.shadcn.com/",
				icon: SiShadcnui
			}
		]
	},
	{
		name: "Backend",
		items: [
			{
				name: "Node.js",
				url: "https://nodejs.org/",
				icon: SiNodedotjs
			},
			{
				name: "Bun",
				url: "https://bun.sh/",
				icon: SiBun
			},
			{
				name: "Laravel",
				url: "https://laravel.com/",
				icon: SiLaravel
			},
			{
				name: "AdonisJS",
				url: "https://adonisjs.com/",
				icon: SiAdonisjs
			},
			{
				name: "Nginx",
				url: "https://nginx.org/",
				icon: SiNginx
			}
		]
	},
	{
		name: "Database",
		items: [
			{
				name: "MySQL",
				url: "https://www.mysql.com/",
				icon: SiMysql
			},
			{
				name: "PostgreSQL",
				url: "https://www.postgresql.org/",
				icon: SiPostgresql
			},
			{
				name: "SQLite",
				url: "https://www.sqlite.org/",
				icon: SiSqlite
			},
			{
				name: "Redis",
				url: "https://redis.io/",
				icon: SiRedis
			}
		]
	},
	{
		name: "Workflow & Hosting",
		items: [
			{
				name: "Git",
				url: "https://git-scm.com/",
				icon: SiGit
			},
			{
				name: "Docker",
				url: "https://www.docker.com/",
				icon: SiDocker
			},
			{
				name: "GitHub",
				url: "https://github.com/",
				icon: SiGithub
			},
			{
				name: "OVHcloud",
				url: "https://www.ovhcloud.com/",
				icon: SiOvh
			},
			{
				name: "Render",
				url: "https://render.com/",
				icon: SiRender
			},
			{
				name: "Vercel",
				url: "https://vercel.com/",
				icon: SiVercel
			},
			{
				name: "Hostinger",
				url: "https://www.hostinger.com/",
				icon: SiHostinger
			}
		]
	}
];
function Stack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Stack",
		id: "stack",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "divide-dashed divide-y divide-border",
			children: StackTable.map((group, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackGroup, {
				index: idx,
				...group
			}, group.name.toLowerCase()))
		})
	});
}
function StackGroup({ name, items, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sm:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-2 mb-1 text-sm sm:p-2 sm:py-3 sm:mb-0 sm:w-45 sm:border-r sm:border-dashed sm:border-r-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "inline-flex space-x-2 font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: `0${index}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-75",
					children: name
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "p-2 w-full flex flex-wrap gap-1 sm:px-2 sm:py-3",
			"aria-labelledby": `Stack-${name}`,
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { render: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: item.url,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { opacity: .8 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "opacity-80",
					children: item.name
				})]
			}) }) }, item.name.toLowerCase()))
		})]
	}, name.toLowerCase());
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Socials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockSeparator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Project, {})
	] });
}
//#endregion
export { Home as component };
