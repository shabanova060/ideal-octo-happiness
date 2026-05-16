import { Link } from "@tanstack/react-router";
import { ThemeSelector } from "~/components/theme-selector";

export function Header(): React.JSX.Element {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg shadow-sm dark:border-slate-800/80 dark:bg-slate-950/80">
			<div className="container mx-auto grid grid-flow-col items-center justify-between px-6 py-4">
				<div>
					<Link to="/" className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
						Aegis Hub
					</Link>
				</div>
				<nav>
					<ul className="grid grid-flow-col gap-x-8 items-center">
						<li>
							<Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400" to="/components">Components</Link>
						</li>
						<li>
							<Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400" to="/products">Products</Link>
						</li>
						<li>
							<Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400" to="/categories">Categories</Link>
						</li>
						<li>
							<Link className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400" to="/brands">Brands</Link>
						</li>
					</ul>
				</nav>
				<ThemeSelector />
			</div>
		</header>
	);
}
