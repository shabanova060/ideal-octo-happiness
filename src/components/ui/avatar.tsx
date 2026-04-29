import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import type { JSX } from "react";
import css from "~/components/ui/avatar.module.css";

type Char = string;
type Monogram = `${Char}${Char}`;

interface AvatarProps extends BaseAvatar.Root.Props {
	imageUrl?: string;
	monogram: Monogram;
	width?: number;
	height?: number;
}

export function Avatar(props: AvatarProps): JSX.Element {
	const { monogram, imageUrl, width = 48, height = 48, ...rest } = props;
	return (
		<BaseAvatar.Root className={css.AvatarRoot} {...rest}>
			<BaseAvatar.Image
				src={imageUrl}
				width={width}
				height={height}
				className={css.AvatarImage}
			/>
			<BaseAvatar.Fallback delay={600} className={css.AvatarFallback}>
				LT
			</BaseAvatar.Fallback>
		</BaseAvatar.Root>
	);
}
