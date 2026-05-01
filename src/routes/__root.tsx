/// <reference types="vite/client" />

import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Header } from "~/components/layouts/header";
import { ThemeProvider } from "~/theme/provider";
import "~/theme/globals.css";

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
			<body className="body-bg">
				<ThemeProvider>
					<Header />
					{children}
					<Scripts />
				</ThemeProvider>
			</body>
		</html>
	);
}
