import { Tabs } from "@base-ui/react/tabs";
import { useSelector } from "@tanstack/react-store";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { applyTheme, cn } from "~/theme/helpers";
import { changeTheme, themeStore } from "~/theme/store";

export interface ThemeSelectorProps {
	className?: string;
}

export function ThemeSelector(props: ThemeSelectorProps): React.JSX.Element {
	const { className } = props;
	const theme = useSelector(themeStore, (state) => state.theme);

	useEffect(() => {
		if (theme !== "system") return;

		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => applyTheme("system");

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	return (
		<Tabs.Root
			className={cn(
				"relative inline-flex shadow-sm rounded-full border border-zinc-400 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950",
				className,
			)}
			value={theme}
			onValueChange={(value) => changeTheme(value)}
		>
			<Tabs.List className="relative z-0 flex items-center">
				<Tabs.Tab
					className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-200 ease-in-out"
					value="system"
				>
					<MonitorCog size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Tab
					className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-200 ease-in-out"
					value="light"
				>
					<Sun size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Tab
					className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-zinc-900 dark:text-zinc-100 transition-colors duration-200 ease-in-out"
					value="dark"
				>
					<Moon size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Indicator className="absolute left-0 -top-px z-[-1] h-[calc(100%+0.125rem)] w-(--active-tab-width) translate-x-(--active-tab-left) rounded-full border border-zinc-400 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 shadow-lg transition-all duration-200 ease-in-out" />
			</Tabs.List>
		</Tabs.Root>
	);
}
