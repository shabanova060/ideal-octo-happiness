import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/theme/helpers";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-indigo-400",
	{
		variants: {
			variant: {
				primary:
					"bg-indigo-600 text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 dark:bg-indigo-500 dark:hover:bg-indigo-400",
				destructive:
					"bg-rose-500 text-white shadow-sm hover:bg-rose-600 dark:bg-rose-600 dark:text-white dark:hover:bg-rose-500",
				outline:
					"border-2 border-slate-200 bg-white shadow-sm text-slate-700 hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-100",
				secondary:
					"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
				ghost:
					"text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-indigo-300",
				link: "text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400",
			},
			size: {
				medium: "h-10 px-5 py-2",
				sm: "h-9 rounded-md px-4",
				lg: "h-12 rounded-xl px-8 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	},
);

export interface ButtonProps
	extends BaseButton.Props,
		VariantProps<typeof buttonVariants> {}

export function Button(props: ButtonProps): React.JSX.Element {
	const {
		className,
		variant = "primary",
		size = "medium",
		...otherProps
	} = props;

	return (
		<BaseButton
			className={cn(buttonVariants({ variant, size, className }))}
			data-slot="button"
			{...otherProps}
		/>
	);
}
