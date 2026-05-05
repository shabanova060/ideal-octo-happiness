import { Button as BaseButton } from "@base-ui/react/button";
import css from "~/components/ui/button/styles.module.css";

interface ButtonProps extends BaseButton.Props {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "small" | "medium" | "large";
	shape?: "rounded" | "square";
}

export function Button(props: ButtonProps): React.JSX.Element {
	const {
		className,
		variant = "primary",
		size = "medium",
		shape = "square",
		children,
		...rest
	} = props;
	return (
		<BaseButton
			className={[css.Button, className].filter(Boolean).join(" ")}
			data-variant={variant}
			data-size={size}
			data-shape={shape}
			{...rest}
		>
			{children}
		</BaseButton>
	);
}
