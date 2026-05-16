import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/_dashboard/")({
	component: HomePage,
});

function HomePage(): React.JSX.Element {
	return (
		<main className="mx-auto max-w-5xl px-6 py-16">
			<div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200/60 bg-white px-8 py-20 shadow-2xl shadow-indigo-100/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none text-center">
				<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/30">
					<span className="text-3xl">🛡️</span>
				</div>
				<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
					Dashboard Overview
				</h1>
				<p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
					Manage operations, configure settings, and monitor data flows across the hub through a centralized, high-performance interface.
				</p>
				<div className="flex flex-col gap-4 sm:flex-row justify-center">
					<a href="/login">
						<Button size="lg" className="w-full sm:w-auto rounded-full">
							Authenticate User
						</Button>
					</a>
					<a href="/components">
						<Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
							Browse Components
						</Button>
					</a>
				</div>
			</div>
		</main>
	);
}
