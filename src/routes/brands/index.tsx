import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brands/")({
	component: BrandsPage,
});

function BrandsPage() {
	return (
		<main>
			<h1>Brands Page</h1>
		</main>
	);
}
