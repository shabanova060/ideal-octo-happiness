import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/login/")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
			<section className="grid place-items-center bg-[var(--ds-background-100)] p-8">
				<article className="grid w-full max-w-sm gap-8">
					<header className="grid gap-2 text-center">
						<h1 className="m-0 text-2xl font-bold text-[var(--ds-gray-1000)]">
							Admin Portal
						</h1>
						<p className="m-0 text-sm text-[var(--ds-gray-900)]">
							Sign up to access the administrative dashboard.
						</p>
					</header>
					<Form className="grid gap-y-4">
						<Field.Root className="grid gap-2">
							<Field.Label className="text-[13px] text-[var(--ds-gray-900)]">
								E-mail address
							</Field.Label>
							<Field.Control
								required
								placeholder="Required"
								className="h-10 rounded-md border-0 bg-[var(--ds-background-200)] px-4 text-black shadow-[0_0_0_1px_var(--ds-gray-alpha-400)] transition-shadow duration-150 ease-in-out focus-within:outline-none focus-within:[&:not([data-invalid])]:shadow-[0_0_0_1px_#00000057,0_0_0_4px_#00000029] focus:data-[invalid]:shadow-[0_0_0_1px_var(--ds-red-900),0_0_0_4px_var(--ds-red-300)]"
							/>

							<Field.Error
								className="text-sm text-[var(--ds-red-900)]"
								match="valueMissing"
							>
								Please enter your name
							</Field.Error>
						</Field.Root>
						<Field.Root className="grid gap-2">
							<Field.Label className="text-[13px] text-[var(--ds-gray-900)]">
								Password
							</Field.Label>
							<Field.Control
								required
								placeholder="Required"
								className="h-10 rounded-md border-0 bg-[var(--ds-background-200)] px-4 text-black shadow-[0_0_0_1px_var(--ds-gray-alpha-400)] transition-shadow duration-150 ease-in-out focus-within:outline-none focus-within:[&:not([data-invalid])]:shadow-[0_0_0_1px_#00000057,0_0_0_4px_#00000029] focus:data-[invalid]:shadow-[0_0_0_1px_var(--ds-red-900),0_0_0_4px_var(--ds-red-300)]"
							/>

							<Field.Error
								className="text-sm text-[var(--ds-red-900)]"
								match="valueMissing"
							>
								Please enter your name
							</Field.Error>
						</Field.Root>
						<Button
							type="submit"
							shape="square"
							size="medium"
							variant="primary"
						>
							Log In
						</Button>
					</Form>
				</article>
			</section>

			<section className="hidden place-items-center bg-gradient-to-b from-[#d90012] via-[#0033a0] to-[#f2a800] p-8 md:grid">
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
