import { Link } from "@tanstack/react-router";
import { ThemeSelector } from "~/components/theme-selector";

export function Header(): React.JSX.Element {

	return (
		<header className="border-b border-slate-200 bg-white shadow dark:border-slate-800 dark:bg-slate-900">
			<div className="container mx-auto grid grid-flow-col items-center justify-between px-4 py-3">
				<div>
					<Link to="/" className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
						Dashboard Logo
					</Link>
				</div>
				<nav>
					<ul className="grid grid-flow-col gap-x-8">
						<li>
							<Link className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" to="/components">Components</Link>
						</li>
						<li>
							<Link className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" to="/products">Products</Link>
						</li>
						<li>
							<Link className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" to="/categories">Categories</Link>
						</li>
						<li>
							<Link className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" to="/brands">Brands</Link>
						</li>
					</ul>
				</nav>
				<ThemeSelector />
			</div>
		</header>
	);
}