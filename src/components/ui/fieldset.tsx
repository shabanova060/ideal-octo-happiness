import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";
import { cn } from "~/theme/helpers";

export interface FieldsetProps extends BaseFieldset.Root.Props {}

export function Fieldset(props: FieldsetProps) {
	const { className, ...otherProps } = props;

	return (
		<BaseFieldset.Root
			className={cn(
				"grid w-full gap-5 rounded-xl border-2 border-slate-100 bg-white p-6 pt-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/30",
				className,
			)}
			{...otherProps}
		/>
	);
}

export interface FieldsetLegendProps extends BaseFieldset.Legend.Props {}

export function FieldsetLegend(props: FieldsetLegendProps) {
	const { className, ...otherProps } = props;

	return (
		<BaseFieldset.Legend
			className={cn(
				"-ml-1 rounded-lg bg-indigo-50 px-3 py-1 text-sm font-bold tracking-tight text-indigo-700 shadow-sm ring-1 ring-indigo-200/50 dark:bg-slate-900 dark:text-indigo-400 dark:ring-slate-700",
				className,
			)}
			{...otherProps}
		/>
	);
}
