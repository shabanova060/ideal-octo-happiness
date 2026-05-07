import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/categories/$categoryId")({
	component: CategoryPage,
});

function CategoryPage() {
	return (
		<main>
			<h1>Category Page</h1>
		</main>
	);
}
