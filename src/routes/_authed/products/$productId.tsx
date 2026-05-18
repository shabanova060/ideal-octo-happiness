import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/products/$productId")({
	component: ProductPage,
});

function ProductPage() {
	return (
		<main>
			<h1>Product Page</h1>
		</main>
	);
}
