import type * as React from "react";
import { cn } from "~/theme/helpers";

export interface TableProps extends React.ComponentProps<"table"> {}

export function Table(props: TableProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
			<div className="overflow-x-auto">
				<table
					className={cn(
						"w-full caption-top text-sm text-slate-700 dark:text-slate-300",
						className,
					)}
					data-slot="table"
					{...otherProps}
				>
					{children}
				</table>
			</div>
		</div>
	);
}

export interface TableHeaderProps extends React.ComponentProps<"thead"> {}

export function TableHeader(props: TableHeaderProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<thead
			className={cn(
				"bg-slate-50/50 dark:bg-slate-950/50 [&_tr]:border-b [&_tr]:border-slate-200 dark:[&_tr]:border-slate-800",
				className,
			)}
			data-slot="table-header"
			{...otherProps}
		/>
	);
}

export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export function TableBody(props: TableBodyProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<tbody
			className={cn("[&_tr:last-child]:border-0", className)}
			data-slot="table-body"
			{...otherProps}
		/>
	);
}

export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export function TableFooter(props: TableFooterProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<tfoot
			className={cn(
				"border-t border-slate-200 bg-indigo-50/50 font-semibold text-indigo-900 [&>tr]:last:border-b-0 dark:border-slate-800 dark:bg-indigo-950/20 dark:text-indigo-200",
				className,
			)}
			data-slot="table-footer"
			{...otherProps}
		/>
	);
}

export interface TableRowProps extends React.ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<tr
			className={cn(
				"border-b border-slate-100 transition-colors hover:bg-slate-50/80 data-[state=selected]:bg-indigo-50 dark:border-slate-800/60 dark:hover:bg-slate-800/40 dark:data-[state=selected]:bg-indigo-900/20",
				className,
			)}
			data-slot="table-row"
			{...otherProps}
		/>
	);
}

export interface TableHeadProps extends React.ComponentProps<"th"> {}

export function TableHead(props: TableHeadProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<th
			className={cn(
				"h-14 px-6 text-left align-middle font-semibold text-slate-900 dark:text-slate-100 has-[[role=checkbox]]:pr-0",
				className,
			)}
			data-slot="table-header"
			{...otherProps}
		/>
	);
}

export interface TableCellProps extends React.ComponentProps<"td"> {}

export function TableCell(props: TableCellProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<td
			className={cn("p-6 align-middle has-[[role=checkbox]]:pr-0", className)}
			data-slot="table-cell"
			{...otherProps}
		/>
	);
}

export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

export function TableCaption(props: TableCaptionProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<caption
			className={cn(
				"mt-4 mb-4 px-6 text-sm font-medium text-slate-500 dark:text-slate-400",
				className,
			)}
			data-slot="table-caption"
			{...otherProps}
		/>
	);
}
