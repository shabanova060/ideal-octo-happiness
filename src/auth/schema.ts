import {
	checkAsync,
	email,
	forwardAsync,
	type InferInput,
	minLength,
	object,
	objectAsync,
	partialCheckAsync,
	pipe,
	pipeAsync,
	string,
} from "valibot";
import { checkEmailAvailability } from "~/auth/email";

export const registerSchema = pipeAsync(
	objectAsync({
		email: pipeAsync(
			string(),
			email("Enter a valid e-mail address!"),
			checkAsync(checkEmailAvailability, "This email is already registered!"),
		),
		password: pipe(
			string(),
			minLength(8, "Password mmust be at least 8 characters long!"),
		),
		confirmPassword: pipe(string()),
	}),
	forwardAsync(
		partialCheckAsync(
			[["password"], ["confirmPassword"]],
			(input) => input.password === input.confirmPassword,
			"Passwords do not match",
		),
		["confirmPassword"],
	),
);

export interface RegisterInput extends InferInput<typeof registerSchema> {}

export const loginSchema = object({
	email: pipe(string(), email("Enter a valid e-mail address!")),
	password: pipe(
		string(),
		minLength(8, "Password must be at least 8 characters long!"),
	),
});

export interface LoginInput extends InferInput<typeof loginSchema> {}
