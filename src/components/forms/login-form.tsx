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

const login = createServerFn()
	.inputValidator(loginSchema)
	.handler(async ({ data }) => {
		const { email, password } = data;

		try {
			const admin = await getAdminByEmail(email);

			if (!admin) {
				throw new Error("Invalid email or password.");
			}

			const passwordVerified = verifyPassword(password, admin.password_hash);

			if (!passwordVerified) {
				throw new Error("Invalid email or password.");
			}

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
			throw new Error("An unexpected server error occurred. Please try again later.");
		}
	});

export function LoginForm() {
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
					email: email,
					password: password,
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
		<Form className="grid gap-y-4" onSubmit={submitLogin}>
			{loginError && (
				<span className="text-sm text-red-500 dark:text-red-400">
					{loginError}
				</span>
			)}
			<Field.Root className="grid gap-2">
				<Field.Label className="text-[13px] text-slate-600 dark:text-slate-400">
					E-mail address
				</Field.Label>
				<Field.Control
					className="h-10 rounded-md border border-slate-200 bg-slate-50 px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 data-invalid:border-red-500 data-invalid:focus-within:ring-red-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-slate-600 dark:focus-within:ring-offset-slate-900 dark:data-invalid:border-red-500 dark:data-invalid:focus-within:ring-red-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-200)] autofill:[-webkit-text-fill-color:var(--color-slate-800)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-800)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-200)]"
					name="email"
					type="email"
					placeholder="E-mail address"
					autoComplete="email"
					required
				/>
				<Field.Error
					className="text-sm text-red-500 dark:text-red-400"
					role="alert"
				/>
			</Field.Root>
			<Field.Root className="grid gap-2">
				<Field.Label className="text-[13px] text-slate-600 dark:text-slate-400">
					Password
				</Field.Label>
				<Field.Control
					className="h-10 rounded-md border border-slate-200 bg-slate-50 px-4 text-slate-900 transition-all focus-within:outline-none focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2 data-invalid:border-red-500 data-invalid:focus-within:ring-red-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus-within:ring-slate-600 dark:focus-within:ring-offset-slate-900 dark:data-invalid:border-red-500 dark:data-invalid:focus-within:ring-red-400 autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-200)] autofill:[-webkit-text-fill-color:var(--color-slate-800)] dark:autofill:shadow-[inset_0_0_0px_1000px_var(--color-slate-800)] dark:autofill:[-webkit-text-fill-color:var(--color-slate-200)]"
					name="password"
					type="password"
					placeholder="Password"
					autoComplete="current-password"
					required
				/>

				<Field.Error
					className="text-sm text-red-500 dark:text-red-400"
					role="alert"
				/>
			</Field.Root>
			<Button className="mt-4" type="submit" size="medium" variant="primary">
				Log In
			</Button>
		</Form>
	);
}
