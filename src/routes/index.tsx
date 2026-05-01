import { createFileRoute } from "@tanstack/react-router";
import { columns, products } from "~/components/tables/columns";
import { DataTable } from "~/components/tables/data-table";
import { TableCell, TableRow } from "~/components/ui/table";
import { ThemeSelector } from "~/theme/theme-selector";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<main>
			<ThemeSelector />
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
