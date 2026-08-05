import { ChevronDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fragment } from "react";
import { dashAndLower } from "#/lib/strings";
import { TagsList } from "./tags-list";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./ui/collapsible";
import { InlineSeparator } from "./ui/separator";

export type CollapsibleItem = {
	title: string;

	details: {
		name: string;
		value: string;
	}[];

	content: {
		title: string;
		highlights: readonly string[];
	};

	tags: readonly string[];
};

export type CollapsibleItemsBlockProps = {
	id: string;
	org: {
		name: string;
		website: string;
		logo: string;
	};

	location: string;
	items: readonly CollapsibleItem[];
};

export function CollapsibleItemsBlock({
	id,
	org,
	items,
	location,
}: CollapsibleItemsBlockProps) {
	return (
		<div className="p-2 space-y-3 w-full">
			<div className="flex items-center justify-between">
				<div className="p-0.5 border border-border rounded-md">
					<img
						src={org.logo}
						alt={`${org.name} logo`}
						className="size-8 xs:size-6 border border-border rounded-sm"
						fetchPriority="high"
					/>
				</div>
				<div className="px-1.5 flex-1 xs:flex xs:justify-between xs:items-center xs:gap-x-2">
					<a
						href={org.website}
						className="hover:underline hover:decoration-2 hover:underline-offset-2"
					>
						<h3 className="text-base xs:text-lg font-medium">{org.name}</h3>
					</a>
					<dl>
						<dt className="sr-only">Location</dt>
						<dd className="text-sm opacity-75">{location}</dd>
					</dl>
				</div>
			</div>

			<div className="space-y-2">
				{items.map(({ title, ...props }) => (
					<CollapsibleItem
						title={title}
						orgName={org.name}
						key={`${id}-${dashAndLower(title)}`}
						{...props}
					/>
				))}
			</div>
		</div>
	);
}

type CollapsibleItemProps = CollapsibleItem & {
	orgName: string;
};

function CollapsibleItem({
	title,
	details,
	content,
	tags,
	orgName,
}: CollapsibleItemProps) {
	return (
		<Collapsible className="group space-y-1 border-l-2 border-border">
			<CollapsibleItemTrigger title={title} details={details} />

			<CollapsibleItemContent content={content} />
			<TagsList
				className="px-1.5 py-1"
				items={tags}
				aria-labelledby={`${orgName} tags`}
			/>
		</Collapsible>
	);
}

type CollapsibleItemTriggerProps = Omit<
	CollapsibleItem,
	"content" | "tags"
> & {};

function CollapsibleItemTrigger({
	title,
	details,
}: CollapsibleItemTriggerProps) {
	return (
		<CollapsibleTrigger
			render={
				<button
					type="button"
					className="block p-1 w-full cursor-pointer hover:bg-border/40 hover:transition-colors"
				>
					<div className="flex justify-between">
						<div className="pl-1 space-y-1 xs:space-y-0">
							<h4 className="w-fit text-sm font-medium text-balance xs:text-base">
								{title}
							</h4>
							{details.length && (
								<dl className="xs:flex xs:items-center">
									{details.map(({ name, value }, idx, arr) => (
										<Fragment key={dashAndLower(name)}>
											<div className="w-fit">
												<dt className="sr-only">{name}</dt>
												<dd className="text-sm opacity-75">{value}</dd>
											</div>

											{idx < arr.length - 1 && (
												<InlineSeparator className="hidden xs:block h-4" />
											)}
										</Fragment>
									))}
								</dl>
							)}
						</div>

						<div className="xs:py-1 h-fit">
							<HugeiconsIcon
								icon={ChevronDown}
								className="size-4 transition-transform group-data-open:-rotate-180 group-data-close:rotate-0"
							/>
						</div>
					</div>
				</button>
			}
		/>
	);
}

type CollapsibleItemContentProps = {
	content: CollapsibleItem["content"];
};

function CollapsibleItemContent({ content }: CollapsibleItemContentProps) {
	return (
		<CollapsibleContent className="p-2 text-sm opacity-90 overflow-hidden group-data-open:animate-slide-down group-data-closed:animate-slide-up">
			<div className="pl-2 space-y-1">
				<h4 className="font-medium">{content.title}:</h4>
				<ul className="flex flex-col">
					{content.highlights.map((highlight) => (
						<li key={dashAndLower(highlight)} className="inline-flex space-x-1">
							<span> - </span>
							<span>{highlight}</span>
						</li>
					))}
				</ul>
			</div>
		</CollapsibleContent>
	);
}
