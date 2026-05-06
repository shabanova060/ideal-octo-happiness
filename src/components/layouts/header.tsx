import { ThemeSelector } from "~/components/theme-selector";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function Header(): React.JSX.Element {
	return (
		<header className="flex place-items-center justify-between gap-x-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc/85 px-4 py-[0.225rem] backdrop-blur-md">
			<div>
				<a href="/" className="font-medium text-zinc-950">
					Dashboard Logo
				</a>
			</div>
			<nav></nav>
			<ThemeSelector />
			<Avatar>
				<AvatarImage src="/avatars/drow-avatar.webp" width="48" height="48" />
				<AvatarFallback>DR</AvatarFallback>
			</Avatar>
		</header>
	);
}
