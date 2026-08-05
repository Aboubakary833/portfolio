import { Badge } from "#/components/ui/badge";
import Section from "#/components/ui/section";
import StackTable, {
	type StackGroup as OriginalStackGroupProps,
} from "#/data/stack";

export default function Stack() {
	return (
		<Section title="Stack" id="stack">
			<div className="divide-dashed divide-y divide-border">
				{StackTable.map((group, idx) => (
					<StackGroup key={group.name.toLowerCase()} index={idx} {...group} />
				))}
			</div>
		</Section>
	);
}

type StackGroupProps = OriginalStackGroupProps & {
	index: number;
};

function StackGroup({ name, items, index }: StackGroupProps) {
	return (
		<div className="sm:flex" key={name.toLowerCase()}>
			<div className="p-2 mb-1 text-sm sm:p-2 sm:py-3 sm:mb-0 sm:w-45 sm:border-r sm:border-dashed sm:border-r-border">
				<p className="inline-flex space-x-2 font-medium">
					<span className="text-primary">{`0${index}`}</span>
					<span className="opacity-75">{name}</span>
				</p>
			</div>
			<ul
				className="p-2 w-full flex flex-wrap gap-1 sm:px-2 sm:py-3"
				aria-labelledby={`Stack-${name}`}
			>
				{items.map((item) => (
					<li key={item.name.toLowerCase()}>
						<Badge
							render={
								<a href={item.url}>
									<item.icon opacity={0.8} />
									<span className="opacity-80">{item.name}</span>
								</a>
							}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
