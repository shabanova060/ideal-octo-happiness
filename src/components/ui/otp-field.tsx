import { OTPFieldPreview as BaseOTPField } from "@base-ui/react/otp-field";
import { cn } from "~/theme/helpers";

interface OTPFieldProps extends BaseOTPField.Root.Props {}

export function OTPField(props: OTPFieldProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseOTPField.Root
			className={cn(
				"grid w-full auto-cols-max grid-flow-col gap-2 sm:gap-3",
				className,
			)}
			data-slot="otp-field"
			{...otherProps}
		/>
	);
}

interface OTPFieldInputProps extends BaseOTPField.Input.Props {}

export function OTPFieldInput(props: OTPFieldInputProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseOTPField.Input
			className={cn(
				"box-border m-0 h-14 w-12 sm:h-16 sm:w-14 rounded-xl border-2 border-slate-200 bg-white text-center font-inherit text-2xl font-bold text-slate-900 shadow-sm transition-all duration-200 outline-none",
				"hover:border-indigo-300 dark:hover:border-slate-500",
				"focus:border-indigo-500 focus:bg-indigo-50/50 focus:ring-4 focus:ring-indigo-500/20 focus:-outline-offset-1",
				"dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:bg-indigo-950/30 dark:focus:ring-indigo-400/20",
				className,
			)}
			data-slot="otp-field-input"
			{...otherProps}
		/>
	);
}

interface OTPFieldSeparatorProps extends BaseOTPField.Separator.Props {}

export function OTPFieldSeparator(props: OTPFieldSeparatorProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseOTPField.Separator
			className={cn(
				"grid min-w-4 place-items-center font-bold text-slate-400 dark:text-slate-600",
				className,
			)}
			data-slot="otp-field-separator"
			{...otherProps}
		/>
	);
}
