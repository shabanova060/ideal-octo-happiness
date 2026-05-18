import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/categories/")({
	component: CategoriesPage,
});

function CategoriesPage() {
	return (
		<main>
			<h1>Categories Page</h1>
		</main>
	);
}
