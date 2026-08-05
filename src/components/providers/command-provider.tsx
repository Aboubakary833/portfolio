import {
	createContext,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";
import { AppCommand } from "../app-command";

type CommandProviderState = {
	open: boolean;
	setOpen: (value: boolean) => void;
};

const CommandProviderContext = createContext<CommandProviderState>({
	open: false,
	setOpen: () => {},
});

export function CommandProvider({ children }: PropsWithChildren) {
	const [open, setOpen] = useState(false);

	return (
		<CommandProviderContext value={{ open, setOpen }}>
			{children}
			<AppCommand />
		</CommandProviderContext>
	);
}

export function useCommand(): CommandProviderState {
	const context = useContext(CommandProviderContext);

	if (context === undefined) {
		throw new Error("useCommand must be used within a CommandProviderContext");
	}

	return context;
}
