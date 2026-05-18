import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/brands/$brandId")({
	component: BrandPage,
});

function BrandPage() {
	return (
		<main>
			<h1>Brand Page</h1>
		</main>
	);
}
