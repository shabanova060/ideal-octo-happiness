import { Field } from "@base-ui/react/field";
import { Form } from "@base-ui/react/form";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/login/")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<main className="auth-page">
			<section className="auth-form-section">
				<article className="auth-form-article">
					<header className="auth-form-header">
						<h1 className="auth-title">Admin Portal</h1>
						<p className="auth-description">
							Sign up to access the administrative dashboard.
						</p>
					</header>
					<Form className="form">
						<Field.Root className="field">
							<Field.Label className="field-label">E-mail address</Field.Label>
							<Field.Control
								required
								placeholder="Required"
								className="field-input"
							/>

							<Field.Error className="field-error" match="valueMissing">
								Please enter your name
							</Field.Error>
						</Field.Root>
						<Field.Root className="field">
							<Field.Label className="field-label">Password</Field.Label>
							<Field.Control
								required
								placeholder="Required"
								className="field-input"
							/>

							<Field.Error className="field-error" match="valueMissing">
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

			<section className="auth-hero">
				<figure className="auth-hero-figure">
					<img
						src="/backgrounds/armenia.webp"
						alt="A cinematic portrait of Armenia"
						className="auth-hero-image"
					/>
					<figcaption className="auth-hero-caption">
						Character Art: Windranger
					</figcaption>
				</figure>
			</section>
		</main>
	);
}
