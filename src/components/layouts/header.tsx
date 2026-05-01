import type { JSX } from "react";
import css from "~/components/layouts/header.module.css";
import { Avatar } from "~/components/ui/avatar";

export function Header(): JSX.Element {
	return (
		<header className={css.Header}>
			<div>
				<a href="/">Dashboard Logo</a>
			</div>
			<nav></nav>
			<Avatar imageUrl="/avatars/drow-avatar.webp" monogram="DR" />
		</header>
	);
}
