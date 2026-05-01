import css from "~/components/ui/table.module.css";

interface TableProps extends React.ComponentProps<"table"> {}

export function Table(props: TableProps) {
	const { className, ...rest } = props;
	return (
		<div className={css.TableContainer}>
			<table
				className={[css.Table, className].filter(Boolean).join(" ")}
				{...rest}
			/>
		</div>
	);
}

interface TableHeaderProps extends React.ComponentProps<"thead"> {}

export function TableHeader(props: TableHeaderProps) {
	const { className, ...rest } = props;
	return (
		<thead
			className={[css.TableHeader, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableCaptionProps extends React.ComponentProps<"caption"> {}

export function TableCaption(props: TableCaptionProps) {
	const { className, ...rest } = props;
	return (
		<caption
			className={[css.TableCaption, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export function TableBody(props: TableBodyProps) {
	const { className, ...rest } = props;
	return (
		<tbody
			className={[css.TableBody, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableRowProps extends React.ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
	const { className, ...rest } = props;
	return (
		<tr
			className={[css.TableRow, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableHeadProps extends React.ComponentProps<"th"> {}

export function TableHead(props: TableHeadProps) {
	const { className, ...rest } = props;
	return (
		<th
			className={[css.TableHead, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableCellProps extends React.ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
	const { className, ...rest } = props;
	return (
		<td
			className={[css.TableCell, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}

interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export function TableFooter(props: TableFooterProps) {
	const { className, ...rest } = props;
	return (
		<tfoot
			className={[css.TableFooter, className].filter(Boolean).join(" ")}
			{...rest}
		/>
	);
}
