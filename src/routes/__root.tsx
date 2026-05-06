/// <reference types="vite/client" />
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Header } from "~/components/layouts/header";
import tailwindcss from "~/theme/globals.css?url";
import { ThemeProvider } from "~/theme/provider";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "color-scheme",
				content: "light dark",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [{ rel: "stylesheet", href: tailwindcss }],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="antialiased bg-white dark:bg-black">
				<ThemeProvider>
					<Header />
					{children}
					<Scripts />
				</ThemeProvider>
			</body>
		</html>
	);
}
