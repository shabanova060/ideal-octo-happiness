import { createFileRoute } from "@tanstack/react-router";
import { ThemeSelector } from "~/components/theme-selector";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<ThemeSelector />
			<a href="/login">
				<Button>Log In</Button>
			</a>
		</main>
	);
}
