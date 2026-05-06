import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import { cn } from "~/theme/helpers";

interface AvatarProps extends BaseAvatar.Root.Props {}

export function Avatar(props: AvatarProps): React.JSX.Element {
	const { children, className, ...otherProps } = props;
	return (
		<BaseAvatar.Root
			className={cn(
				"inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base text-gray-900 select-none",
				className,
			)}
			data-slot="avatar"
			{...otherProps}
		>
			{children}
		</BaseAvatar.Root>
	);
}

interface AvatarImageProps extends BaseAvatar.Image.Props {}

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

interface AvatarFallbackProps extends BaseAvatar.Fallback.Props {}

export function AvatarFallback(props: AvatarFallbackProps): React.JSX.Element {
	const { children, className, ...otherProps } = props;
	return (
		<BaseAvatar.Fallback
			className={cn(
				"flex size-full items-center justify-center text-base",
				className,
			)}
			data-slot="avatar-fallback"
			{...otherProps}
		>
			{children}
		</BaseAvatar.Fallback>
	);
}
