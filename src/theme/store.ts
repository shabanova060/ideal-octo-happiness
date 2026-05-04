import { createStore } from "@tanstack/react-store";
import { applyTheme, getInitialTheme, type Theme } from "~/theme/helpers";

export const themeStore = createStore({
	theme: getInitialTheme(),
});

export function changeTheme(newTheme: Theme): void {
	localStorage.setItem("theme", newTheme);
	themeStore.setState((state) => ({ ...state, theme: newTheme }));
	applyTheme(newTheme);
}
