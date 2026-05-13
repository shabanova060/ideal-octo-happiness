import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Button } from "~/components/ui/button";

const login = createServerFn()
	.inputValidator((data: { email: string; password: string }) => data)
	.handler(async ({ data }) => {
		const { email, password } = data;
		console.log(email, password);
		return { success: true };
	});

export function LoginForm() {
	const router = useRouter();
	const [loginError, setLoginError] = useState<string>();

	const submitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = Object.fromEntries(
			new FormData(e.currentTarget).entries(),
		);

		if (!email || !password) {
			setLoginError("Please fill in all fields");
			return;
		}

		setLoginError("There was an issue with your credentials");

		await login({
			data: {
				email: email,
				password: password,
			},
		});

		// Invalidate and redirect after successful login
		await router.invalidate();
		// router.navigate({ to: "/dashboard" });
	};

	return (
		<Form className="grid gap-y-4" onSubmit={submitLogin}>
			<Field.Root className="grid gap-2">
				{loginError}

				<Field.Label className="text-[13px] text-slate-600 dark:text-slate-400">
					E-mail address
				</Field.Label>
				<Field.Control
					name="email"
					type="email"
					placeholder="E-mail address"
					required
					className="h-10 rounded-md border border-slate-200 bg-slate-50 px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 data-invalid:border-red-500 data-invalid:focus-within:ring-red-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-slate-600 dark:focus-within:ring-offset-slate-900 dark:data-invalid:border-red-500 dark:data-invalid:focus-within:ring-red-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-200)] autofill:[-webkit-text-fill-color:var(--color-slate-800)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-800)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-200)]"
				/>

				<Field.Error className="text-sm text-red-500 dark:text-red-400" />
			</Field.Root>
			<Field.Root className="grid gap-2">
				<Field.Label className="text-[13px] text-slate-600 dark:text-slate-400">
					Password
				</Field.Label>
				<Field.Control
					name="password"
					type="password"
					placeholder="Password"
					required
					className="h-10 rounded-md border border-slate-200 bg-slate-50 px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 data-invalid:border-red-500 data-invalid:focus-within:ring-red-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-slate-600 dark:focus-within:ring-offset-slate-900 dark:data-invalid:border-red-500 dark:data-invalid:focus-within:ring-red-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-200)] autofill:[-webkit-text-fill-color:var(--color-slate-800)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-800)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-200)]"
				/>

				<Field.Error className="text-sm text-red-500 dark:text-red-400" />
			</Field.Root>
			<Button className="mt-4" type="submit" size="medium" variant="primary">
				Log In
			</Button>
		</Form>
	);
}
