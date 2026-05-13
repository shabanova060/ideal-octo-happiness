import { createFileRoute } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
	Tabs,
	TabsIndicator,
	TabsList,
	TabsPanel,
	TabsTab,
} from "~/components/ui/tabs";

export const Route = createFileRoute("/_dashboard/components/")({
	component: ComponentsPage,
});

function ComponentsPage() {
	return (
		<main className="p-4">
			<h1 className="font-bold text-4xl text-gray-950 dark:text-gray-50">
				Components Page
			</h1>
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
					<Button variant="outline">Click me</Button>
					<Button variant="secondary">Click me</Button>
					<Button variant="ghost">Click me</Button>
					<Button variant="link">Click me</Button>
				</div>
			</section>
			<section className="grid gap-8 mt-8">
				<h2 className="font-medium text-2xl text-gray-950 dark:text-gray-50">
					Tabs
				</h2>
				<Tabs orientation="horizontal">
					<TabsList>
						<TabsIndicator />
						<TabsTab value="product">Product</TabsTab>
						<TabsTab value="seo">SEO</TabsTab>
						<TabsTab value="attachments">Attachments</TabsTab>
					</TabsList>
					<TabsPanel value="product">Some product content</TabsPanel>
					<TabsPanel value="seo">Some SEO content</TabsPanel>
					<TabsPanel value="attachments">Some attachments content</TabsPanel>
				</Tabs>
				<Tabs orientation="vertical">
					<TabsList>
						<TabsIndicator />
						<TabsTab value="product">Product</TabsTab>
						<TabsTab value="seo">SEO</TabsTab>
						<TabsTab value="attachments">Attachments</TabsTab>
					</TabsList>
					<TabsPanel value="product">Some product content</TabsPanel>
					<TabsPanel value="seo">Some SEO content</TabsPanel>
					<TabsPanel value="attachments">Some attachments content</TabsPanel>
				</Tabs>
			</section>
		</main>
	);
}
