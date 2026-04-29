import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<h4>Home Page</h4>
			<Button variant="primary" size="medium" shape="rounded">
				Press Button
			</Button>
			<Button variant="secondary" size="medium" shape="rounded">
				Press Button
			</Button>
			<Button variant="tertiary" size="medium" shape="square">
				Press Button
			</Button>
		</main>
	);
}
