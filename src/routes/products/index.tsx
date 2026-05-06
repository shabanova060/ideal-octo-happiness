import { createFileRoute } from "@tanstack/react-router";
import { ProductsTable } from "~/components/tables/products-table";
import { columns, products } from "~/components/tables/products-table/columns";
import { TableCell, TableRow } from "~/components/ui/table";

export const Route = createFileRoute("/products/")({
	component: ProductsPage,
});

function ProductsPage() {
	return (
		<main>
			<h1>Products Page</h1>
			<ProductsTable
				caption="Product List - list of products (Data Table)"
				columns={columns}
				data={products}
				footer={
					<TableRow>
						<TableCell colSpan={columns.length}>
							Total Products in List: {products.length}
						</TableCell>
					</TableRow>
				}
			/>
		</main>
	);
}
