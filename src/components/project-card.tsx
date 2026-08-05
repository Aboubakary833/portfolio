import {
	ArrowUpRight03Icon,
	Browser,
	Github,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Project } from "#/data/projects";
import { TagsList } from "./tags-list";
import Button from "./ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export type ProjectCardProps = Omit<Project, "id"> & {};

export function ProjectCard({
	title,
	description,
	tags,
	externalUrls,
}: ProjectCardProps) {
	return (
		<Card className="py-2 justify-between">
			<CardHeader className="px-2">
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="px-2 space-y-(--card-spacing)">
				<div>
					<p className="text-base opacity-80">{description}</p>
				</div>
				<TagsList items={tags} aria-labelledby={`${title} tags`} />
			</CardContent>
			<CardFooter className="p-2">
				<div className="flex items-center">
					{externalUrls?.github && (
						<ProjectCardLink type="Github" url={externalUrls.github} />
					)}

					{externalUrls?.live && (
						<ProjectCardLink type="Live" url={externalUrls.live} />
					)}
				</div>
			</CardFooter>
		</Card>
	);
}

function ProjectCardLink({
	type,
	url,
}: {
	type: "Github" | "Live";
	url: string;
}) {
	const icon = type === "Github" ? Github : Browser;

	return (
		<Button
			variant="outline"
			nativeButton={false}
			render={
				<a href={url} target="_blank">
					<HugeiconsIcon icon={icon} className="size-4" />
					<span>{type}</span>
					<HugeiconsIcon icon={ArrowUpRight03Icon} className="size-4" />
				</a>
			}
		/>
	);
}
