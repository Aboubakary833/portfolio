import { Link } from "@tanstack/react-router";
import { AppCommandTrigger } from "./app-command";
import { AppLogo } from "./logos";
import ThemeToggle from "./theme-toggle";
import { InlineSeparator } from "./ui/separator";

function Header() {
	return (
		<header className="sticky top-0 pt-2 bg-background z-50">
			<div className="px-2 bg-background border-y border-border">
				<div className="px-2 flex items-center justify-between border-x border-border">
					<div>
						<Link to="/" aria-label="Home">
							<AppLogo className="size-13 md:size-15" />
						</Link>
					</div>

					<div className="flex items-center">
						<AppCommandTrigger />
						<InlineSeparator />
						<ThemeToggle />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
