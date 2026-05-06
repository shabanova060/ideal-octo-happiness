import type * as React from "react";
import { cn } from "~/theme/helpers";

export interface TableProps extends React.ComponentProps<"table"> {}

export function Table(props: TableProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<div className="relative w-full overflow-auto rounded-md border border-gray-200 bg-white">
			<table
				className={cn("w-full caption-top text-sm text-gray-900", className)}
				{...otherProps}
			>
				{children}
			</table>
		</div>
	);
}

export interface TableHeaderProps extends React.ComponentProps<"thead"> {}

export function TableHeader(props: TableHeaderProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<thead
			className={cn("[&_tr]:border-b [&_tr]:border-gray-200", className)}
			{...otherProps}
		>
			{children}
		</thead>
	);
}

export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export function TableBody(props: TableBodyProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<tbody
			className={cn("[&_tr:last-child]:border-0", className)}
			{...otherProps}
		>
			{children}
		</tbody>
	);
}

export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export function TableFooter(props: TableFooterProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<tfoot
			className={cn(
				"border-t border-gray-200 bg-gray-50 font-medium [&>tr]:last:border-b-0",
				className,
			)}
			{...otherProps}
		>
			{children}
		</tfoot>
	);
}

export interface TableRowProps extends React.ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<tr
			className={cn(
				"border-b border-gray-200 transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-100",
				className,
			)}
			{...otherProps}
		>
			{children}
		</tr>
	);
}

export interface TableHeadProps extends React.ComponentProps<"th"> {}

export function TableHead(props: TableHeadProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<th
			className={cn(
				"h-12 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...otherProps}
		>
			{children}
		</th>
	);
}

export interface TableCellProps extends React.ComponentProps<"td"> {}

export function TableCell(props: TableCellProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<td
			className={cn(
				"p-4 align-middle [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...otherProps}
		>
			{children}
		</td>
	);
}

export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

export function TableCaption(props: TableCaptionProps): React.JSX.Element {
	const { className, children, ...otherProps } = props;

	return (
		<caption
			className={cn("mt-4 text-sm text-gray-500", className)}
			{...otherProps}
		>
			{children}
		</caption>
	);
}
