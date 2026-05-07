import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/categories/")({
	component: CategoriesPage,
});

function CategoriesPage() {
	return (
		<main>
			<h1>Categories Page</h1>
		</main>
	);
}
