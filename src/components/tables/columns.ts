import type { ColumnDef } from "@tanstack/react-table";

export interface Product {
	id: string;
	name: string;
	brand: string;
	category: string;
	price: number;
	currency: string;
	stock: number;
	status: "active" | "hidden" | "disabled";
	lastUpdated: string;
}

export const products: Product[] = [
	{
		id: "prod-001",
		name: "Grass-Fed Bio Ribeye Steak",
		brand: "Nature's Pasture",
		category: "Bio Meat",
		price: 34.5,
		currency: "USD",
		stock: 15,
		status: "active",
		lastUpdated: "2026-04-30T08:00:00Z",
	},
	{
		id: "prod-002",
		name: "Zero-Proof Botanical Spirit",
		brand: "Clear Mind Beverage Co.",
		category: "Beverages",
		price: 28.0,
		currency: "USD",
		stock: 45,
		status: "active",
		lastUpdated: "2026-05-01T10:30:00Z",
	},
	{
		id: "prod-003",
		name: "Organic Free-Range Whole Chicken",
		brand: "Heritage Farms",
		category: "Bio Meat",
		price: 22.9,
		currency: "USD",
		stock: 4,
		status: "active",
		lastUpdated: "2026-05-01T11:15:00Z",
	},
	{
		id: "prod-004",
		name: "Sparkling Mineral Water (12-Pack)",
		brand: "Alpine Springs",
		category: "Beverages",
		price: 14.99,
		currency: "USD",
		stock: 120,
		status: "active",
		lastUpdated: "2026-04-29T16:45:00Z",
	},
	{
		id: "prod-005",
		name: "Pasture-Raised Bio Lamb Chops",
		brand: "Nature's Pasture",
		category: "Bio Meat",
		price: 42.0,
		currency: "USD",
		stock: 0,
		status: "disabled",
		lastUpdated: "2026-05-01T09:00:00Z",
	},
];

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: "id",
		header: "ID",
	},
	{
		accessorKey: "name",
		header: "Product Name",
	},
	{
		accessorKey: "brand",
		header: "Brand",
	},
	{
		accessorKey: "category",
		header: "Category",
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
			const currency = row.original.currency;

			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: currency,
			}).format(amount);

			return formatted;
		},
	},
	{
		accessorKey: "stock",
		header: "Stock Level",
		cell: ({ row }) => {
			const stock = row.getValue("stock") as number;
			return stock > 5 ? stock : `${stock} (Low Stock)`;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status") as string;
			return status.charAt(0).toUpperCase() + status.slice(1);
		},
	},
	{
		accessorKey: "lastUpdated",
		header: "Last Updated",
		cell: ({ row }) => {
			const date = new Date(row.getValue("lastUpdated"));
			return date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			});
		},
	},
];
