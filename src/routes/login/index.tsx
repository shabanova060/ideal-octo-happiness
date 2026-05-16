import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "~/components/forms/login-form";

export const Route = createFileRoute("/login/")({
	component: LoginPage,
});

function LoginPage(): React.JSX.Element {
	return (
		<main className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-slate-50 dark:bg-slate-950">
			<section className="grid place-items-center p-8 bg-slate-50 dark:bg-slate-950">
				<article className="grid w-full max-w-md gap-8 rounded-3xl bg-white p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
					<header className="grid gap-3 text-center">
						<h1 className="m-0 text-3xl font-extrabold tracking-tight bg-linear-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
							Aegis Hub
						</h1>
						<p className="m-0 text-sm font-medium text-slate-500 dark:text-slate-400">
							Sign in to access the administrative dashboard.
						</p>
					</header>
					<LoginForm />
				</article>
			</section>

			<section className="hidden relative md:grid place-items-center p-6 bg-slate-950 overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-violet-800 to-fuchsia-900 opacity-90 mix-blend-multiply z-10" />
				<figure className="relative h-full w-full overflow-hidden rounded-4xl shadow-2xl z-20 ring-1 ring-white/10">
					<img
						src="/backgrounds/armenia.webp"
						alt="A cinematic portrait"
						className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
					<figcaption className="absolute bottom-8 left-8 z-50 rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md border border-white/20 shadow-xl">
						Character Art: Giorgio Armenia
					</figcaption>
				</figure>
			</section>
		</main>
	);
}
