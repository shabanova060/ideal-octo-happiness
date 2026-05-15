import { OTPFieldPreview as BaseOTPField } from "@base-ui/react/otp-field";
import { cn } from "~/theme/helpers";

interface OTPFieldProps extends BaseOTPField.Root.Props {}

export function OTPField(props: OTPFieldProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseOTPField.Root
			className={cn("grid w-full auto-cols-max grid-flow-col gap-2", className)}
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
				"box-border m-0 h-11 w-10 rounded-lg border border-slate-300 bg-transparent text-center font-inherit text-lg font-medium text-slate-900 outline-none focus:outline-solid focus:outline-2 focus:-outline-offset-1 focus:outline-slate-800 dark:border-slate-600 dark:text-slate-100 dark:focus:outline-slate-400",
				className,
			)}
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
				"grid w-4 place-items-center text-slate-500 dark:text-slate-400",
				className,
			)}
			{...otherProps}
		/>
	);
}
