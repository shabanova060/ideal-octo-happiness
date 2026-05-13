import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "~/components/forms/login-form";

export const Route = createFileRoute("/login/")({
	component: LoginPage,
});

function LoginPage(): React.JSX.Element {
	return (
		<main className="grid min-h-screen grid-cols-1 md:grid-cols-2 bg-slate-50 dark:bg-slate-950">
			<section className="grid place-items-center bg-white p-8 dark:bg-slate-900">
				<article className="grid w-full max-w-sm gap-8">
					<header className="grid gap-2 text-center">
						<h1 className="m-0 text-2xl font-bold text-slate-950 dark:text-slate-50">
							Admin Portal
						</h1>
						<p className="m-0 text-sm text-slate-600 dark:text-slate-400">
							Sign up to access the administrative dashboard.
						</p>
					</header>
					<LoginForm />
				</article>
			</section>

			<section className="hidden place-items-center bg-linear-to-b from-[#d90012] via-[#0033a0] to-[#f2a800] p-8 md:grid">
				<figure className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl after:absolute after:inset-0 after:pointer-events-none after:bg-[linear-gradient(rgba(217,0,18,0.6)_33.3%,rgba(0,51,160,0.4)_33.3%,66.6%,rgba(242,168,0,0.4)_66.6%)]">
					<img
						src="/backgrounds/armenia.webp"
						alt="A cinematic portrait of Armenia"
						className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
					/>
					<figcaption className="absolute bottom-4 right-4 z-50 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
						Character Art: Windranger
					</figcaption>
				</figure>
			</section>
		</main>
	);
}
