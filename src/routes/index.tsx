import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main className="mx-auto container mt-16">
			<a href="/login">
				<Button>Log In</Button>
			</a>
			<a href="/components">
				<Button variant="secondary">Components</Button>
			</a>
		</main>
	);
}
