import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/$categoryId")({
	component: CategoryPage,
});

function CategoryPage() {
	return (
		<main>
			<h1>Category Page</h1>
		</main>
	);
}
