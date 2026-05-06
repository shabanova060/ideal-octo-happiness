import { Avatar } from "~/components/ui/avatar";

export function Header(): React.JSX.Element {
	return (
		<header className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4 rounded-full border border-gray-200 bg-white/85 px-4 py-[0.225rem] backdrop-blur-md">
			<div>
				<a href="/" className="font-medium">
					Dashboard Logo
				</a>
			</div>
			<nav></nav>
			<Avatar imageUrl="/avatars/drow-avatar.webp" monogram="DR" />
		</header>
	);
}
