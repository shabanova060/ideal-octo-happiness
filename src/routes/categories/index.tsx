import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/")({
	component: CategoriesPage,
});

function CategoriesPage() {
	return (
		<main>
			<h1>Categories Page</h1>
		</main>
	);
}
