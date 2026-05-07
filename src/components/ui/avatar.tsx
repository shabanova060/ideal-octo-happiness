import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "~/theme/helpers";

export interface AvatarProps extends BaseAvatar.Root.Props { }

export function Avatar(props: AvatarProps): React.JSX.Element {
	const { children, className, ...otherProps } = props;

	return (
		<BaseAvatar.Root
			className={cn(
				"inline-flex size-12 items-center justify-center overflow-hidden rounded-full align-middle select-none bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
				className,
			)}
			data-slot="avatar"
			{...otherProps}
		>
			{children}
		</BaseAvatar.Root>
	);
}

export interface AvatarImageProps extends BaseAvatar.Image.Props { }

export function AvatarImage(props: AvatarImageProps): React.JSX.Element {
	const { className, ...otherProps } = props;

	return (
		<BaseAvatar.Image
			className={cn("size-full object-cover", className)}
			data-slot="avatar-image"
			{...otherProps}
		/>
	);
}

export interface AvatarFallbackProps extends BaseAvatar.Fallback.Props { }

export function AvatarFallback(props: AvatarFallbackProps): React.JSX.Element {
	const { children, className, ...otherProps } = props;

	return (
		<BaseAvatar.Fallback
			className={cn(
				"flex size-full items-center justify-center text-base font-medium",
				className,
			)}
			data-slot="avatar-fallback"
			{...otherProps}
		>
			{children}
		</BaseAvatar.Fallback>
	);
}