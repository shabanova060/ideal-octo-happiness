import { ScriptOnce } from "@tanstack/react-router";
import { themeScript } from "~/theme/script";

interface ThemeProviderProps {
	children: React.ReactNode;
}

export function ThemeProvider(props: ThemeProviderProps) {
	const { children } = props;
	return (
		<>
			<ScriptOnce>{themeScript}</ScriptOnce>
			{children}
		</>
	);
}
