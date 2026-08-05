import {
	Mail01Icon,
	MaleSymbolIcon,
	MapPinHouseIcon,
	TelephoneIcon,
	UserStatusIcon,
	WorkIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import Section from "#/components/ui/section";
import { author } from "#/data/author";

export default function Overview() {
	return (
		<Section className="border-b border-b-border" id="overview">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="p-1 pb-0 space-y-1 xs:p-2 xs:pb-0 md:pb-2">
					<Item
						icon={WorkIcon}
						render={
							<ItemText>
								<span>{author.role}</span>
								<span className="px-px text-border xs:px-1">|</span>
								<span className="opacity-75">Freelance</span>
							</ItemText>
						}
					/>

					<Item
						icon={MapPinHouseIcon}
						render={
							<ItemLink
								href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(author.address)}`}
							>
								{author.address}
							</ItemLink>
						}
					/>

					<Item
						icon={TelephoneIcon}
						render={
							<ItemDecoder
								value={author.phone}
								render={(decodedValue) => (
									<ItemLink href={`tel:${decodedValue.replaceAll(/\s/g, "")}`}>
										{decodedValue}
									</ItemLink>
								)}
							/>
						}
					/>
				</div>

				<div className="p-1 space-y-1 xs:p-2">
					<Item
						icon={Mail01Icon}
						render={
							<ItemDecoder
								value={author.email}
								render={(decodedValue) => (
									<ItemLink href={`mailto:${decodedValue}`}>
										{decodedValue}
									</ItemLink>
								)}
							/>
						}
					/>

					<Item
						icon={UserStatusIcon}
						render={<ItemText>{author.status}</ItemText>}
					/>

					<Item
						icon={MaleSymbolIcon}
						render={<ItemText>{author.pronoun}</ItemText>}
					/>
				</div>
			</div>
		</Section>
	);
}

type ItemProps = Omit<ComponentProps<"div">, "children"> & {
	icon: HugeiconsIconProps["icon"];
	render: ReactNode;
};

type ItemDecoderProps = {
	/**The actual `base64` encoded value*/
	value: string;

	/**Pass the `base64` decoded value to the children*/
	render: (decodedValue: string) => ReactNode;
};

function Item({ className, icon, render, ...props }: ItemProps) {
	return (
		<div
			className={clsx(
				"p-1 w-full inline-flex items-center space-x-2",
				className,
			)}
			{...props}
		>
			<span className="p-0.5 inline-flex items-center justify-center border border-border rounded-md">
				<HugeiconsIcon icon={icon} className="size-6" />
			</span>
			{render}
		</div>
	);
}

function ItemText({ className, ...props }: ComponentProps<"p">) {
	return <p className={clsx("inline text-balance", className)} {...props} />;
}

function ItemLink({ className, ...props }: ComponentProps<"a">) {
	return (
		<a
			className={clsx(
				"text-balance hover:underline hover:decoration-2 hover:underline-offset-2",
				className,
			)}
			target="_blank"
			rel="noopener"
			{...props}
		/>
	);
}

function ItemDecoder({ value, render }: ItemDecoderProps) {
	return render(atob(value));
}
