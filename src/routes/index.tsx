import { createFileRoute } from "@tanstack/react-router";
import { columns, products } from "~/components/tables/columns";
import { DataTable } from "~/components/tables/data-table";
import { ThemeSelector } from "~/components/theme-selector";
import { Button } from "~/components/ui/button";
import { TableCell, TableRow } from "~/components/ui/table";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<ThemeSelector />
			<a href="/login">
				<Button>Log In</Button>
			</a>
			<DataTable
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
