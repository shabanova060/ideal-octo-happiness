import { Tabs } from "@base-ui/react/tabs";
import { useSelector } from "@tanstack/react-store";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import css from "~/components/theme-selector.module.css";
import { applyTheme } from "~/theme/helpers";
import { changeTheme, themeStore } from "~/theme/store";

interface ThemeSelectorProps {
	className?: string;
}

export function ThemeSelector(props: ThemeSelectorProps) {
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
			className={`${css.ThemeTabs} ${className || ""}`}
			value={theme}
			onValueChange={(value) => changeTheme(value)}
		>
			<Tabs.List className={css.ThemeList}>
				<Tabs.Tab className={css.ThemeTab} value="system">
					<MonitorCog size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Tab className={css.ThemeTab} value="light">
					<Sun size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Tab className={css.ThemeTab} value="dark">
					<Moon size="1.125rem" />
				</Tabs.Tab>
				<Tabs.Indicator className={css.ThemeIndicator} />
			</Tabs.List>
		</Tabs.Root>
	);
}
