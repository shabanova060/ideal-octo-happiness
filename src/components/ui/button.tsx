import { Button as BaseButton } from "@base-ui/react/button";
import css from "~/components/ui/button.module.css";

interface ButtonProps extends BaseButton.Props {
	variant: "primary" | "secondary" | "tertiary";
	size: "small" | "medium" | "large";
	shape: "rounded" | "square";
}

export function Button(props: ButtonProps): React.JSX.Element {
	const { className, variant, size, shape, children, ...rest } = props;
	return (
		<BaseButton
			className={[css.TableRow, className].filter(Boolean).join(" ")}
			data-variant={variant}
			data-size={size}
			data-shape={shape}
			{...rest}
		>
			{children}
		</BaseButton>
	);
}
