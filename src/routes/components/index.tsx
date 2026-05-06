import { createFileRoute } from "@tanstack/react-router";
import { ThemeSelector } from "~/components/theme-selector";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/components/")({
	component: ComponentsPage,
});

function ComponentsPage() {
	return (
		<main className="p-4">
			<h1 className="font-bold text-4xl text-gray-950 dark:text-gray-50">
				Components Page
			</h1>
			<ThemeSelector className="mt-4 mb-8" />
			<section className="grid gap-8 mt-8">
				<h2 className="font-medium text-2xl text-gray-950 dark:text-gray-50">
					Avatar
				</h2>
				<div className="grid grid-flow-col auto-cols-min gap-6">
					<Avatar>DR</Avatar>
					<Avatar>
						<AvatarImage
							src="/avatars/drow-avatar.webp"
							width="48"
							height="48"
						/>
						<AvatarFallback>DR</AvatarFallback>
					</Avatar>
					<Avatar className="size-18 text-2xl">DR</Avatar>
					<Avatar className="size-18">
						<AvatarImage
							src="/avatars/drow-avatar.webp"
							width="72"
							height="72"
						/>
						<AvatarFallback>DR</AvatarFallback>
					</Avatar>
					<Avatar className="size-24 text-4xl">DR</Avatar>
					<Avatar className="size-24">
						<AvatarImage
							src="/avatars/drow-avatar.webp"
							width="96"
							height="96"
						/>
						<AvatarFallback>DR</AvatarFallback>
					</Avatar>
				</div>
			</section>
			<section className="grid gap-8 mt-8">
				<h2 className="font-medium text-2xl text-gray-950 dark:text-gray-50">
					Button
				</h2>
				<div className="grid grid-flow-col auto-cols-min gap-6">
					<Button variant="primary">Click me</Button>
					<Button variant="destructive">Click me</Button>
					<Button variant="secondary">Click me</Button>
					<Button variant="ghost">Click me</Button>
					<Button variant="link">Click me</Button>
				</div>
			</section>
		</main>
	);
}
