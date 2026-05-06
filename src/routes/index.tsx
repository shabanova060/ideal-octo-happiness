import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<a href="/login">
				<Button>Log In</Button>
			</a>
		</main>
	);
}
