export type Theme = "system" | "light" | "dark";

export function getInitialTheme(): Theme {
	if (typeof window === "undefined") return "system";
	return (localStorage.getItem("theme") as Theme) || "system";
}

export function applyTheme(theme: Theme) {
	if (typeof window === "undefined") return;

	const isDark =
		theme === "dark" ||
		(theme === "system" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches);

	document.documentElement.setAttribute(
		"data-theme",
		isDark ? "dark" : "light",
	);

	const metaThemeColor = document.querySelector('meta[name="theme-color"]');
	if (metaThemeColor) {
		metaThemeColor.setAttribute("content", isDark ? "#09090b" : "#ffffff");
	}
}
