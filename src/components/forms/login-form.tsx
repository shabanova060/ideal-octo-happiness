import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { getAdminByEmail, verifyPassword } from "~/auth/password";
import { loginSchema } from "~/auth/schema";
import { insertAdminSession, setSessionCookie } from "~/auth/session";
import { createSessionToken, hashToken } from "~/auth/utils";
import { Button } from "~/components/ui/button";

// Note: Ensure the `login` serverFn implementation remains exactly as you had it.
const login = createServerFn()
	.inputValidator(loginSchema)
	.handler(async ({ data }) => {
		const { email, password } = data;
		try {
			const admin = await getAdminByEmail(email);
			if (!admin) throw new Error("Invalid email or password.");

			const passwordVerified = verifyPassword(password, admin.password_hash);
			if (!passwordVerified) throw new Error("Invalid email or password.");

			const sessionToken = createSessionToken();
			const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);

			await insertAdminSession(admin.id, hashToken(sessionToken), expiresAt);
			setSessionCookie(sessionToken, expiresAt);

			return { success: true };
		} catch (error) {
			if (error instanceof Error && error.message === "Invalid email or password.") {
				throw error;
			}
			console.error("[Server Error] Login handler failed:", error);
			throw new Error("An unexpected server error occurred.");
		}
	});

export function LoginForm(): React.JSX.Element {
	const router = useRouter();
	const [loginError, setLoginError] = useState<string>();

	const submitLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = Object.fromEntries(
			new FormData(e.currentTarget).entries(),
		);

		try {
			await login({
				data: {
					email: email as string,
					password: password as string,
				},
			});

			await router.invalidate();
			router.navigate({ to: "/" });
		} catch (err: unknown) {
			if (err instanceof Error) {
				setLoginError(err.message);
			} else {
				setLoginError(`An unexpected error occurred ${err}`);
			}
		}
	};

	return (
		<Form className="grid gap-y-5" onSubmit={submitLogin}>
			{loginError && (
				<div className="rounded-lg bg-rose-50 p-3 text-sm font-medium text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
					{loginError}
				</div>
			)}
			<Field.Root className="grid gap-2">
				<Field.Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
					E-mail address
				</Field.Label>
				<Field.Control
					className="h-11 rounded-lg border border-slate-300 bg-white px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent data-invalid:border-rose-500 data-invalid:focus-within:ring-rose-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-indigo-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-50)] autofill:[-webkit-text-fill-color:var(--color-slate-900)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-900)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-100)]"
					name="email"
					type="email"
					placeholder="admin@example.com"
					autoComplete="email"
					required
				/>
				<Field.Error
					className="text-xs font-medium text-rose-500 dark:text-rose-400"
					role="alert"
				/>
			</Field.Root>
			<Field.Root className="grid gap-2">
				<div className="flex items-center justify-between">
					<Field.Label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
						Password
					</Field.Label>
				</div>
				<Field.Control
					className="h-11 rounded-lg border border-slate-300 bg-white px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent data-invalid:border-rose-500 data-invalid:focus-within:ring-rose-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-indigo-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-50)] autofill:[-webkit-text-fill-color:var(--color-slate-900)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-900)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-100)]"
					name="password"
					type="password"
					placeholder="••••••••"
					autoComplete="current-password"
					required
				/>
				<Field.Error
					className="text-xs font-medium text-rose-500 dark:text-rose-400"
					role="alert"
				/>
			</Field.Root>
			<Button className="mt-2 w-full" type="submit" size="lg" variant="primary">
				Secure Log In
			</Button>
		</Form>
	);
}
