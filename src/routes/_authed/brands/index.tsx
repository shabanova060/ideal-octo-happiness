import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/brands/")({
	component: BrandsPage,
});

function BrandsPage() {
	return (
		<main>
			<h1>Brands Page</h1>
		</main>
	);
}
