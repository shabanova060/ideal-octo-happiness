import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/theme/helpers";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-blue-600 text-white hover:bg-blue-600/90",
				destructive: "bg-red-500 text-white hover:bg-red-500/90",
				outline:
					"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
				secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
				ghost:
					"hover:bg-gray-100 text-gray-900 dark:text-gray-50 dark:hover:bg-gray-900",
				link: "text-blue-600 underline-offset-4 hover:underline",
			},
			size: {
				medium: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
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
	extends React.ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {}

export function Button(props: ButtonProps): React.JSX.Element {
	const {
		className,
		variant = "primary",
		size = "medium",
		children,
		...otherProps
	} = props;

	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			data-slot="button"
			{...otherProps}
		>
			{children}
		</button>
	);
}
