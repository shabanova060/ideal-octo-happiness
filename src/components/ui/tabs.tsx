import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cn } from "~/theme/helpers";

interface TabsProps extends BaseTabs.Root.Props {
	orientation?: "horizontal" | "vertical";
}

export function Tabs(props: TabsProps) {
	const { className, orientation = "horizontal", ...otherProps } = props;
	return (
		<BaseTabs.Root
			className={cn(
				"grid",
				"data-[orientation=horizontal]:grid-cols-1 data-[orientation=horizontal]:gap-y-6",
				"data-[orientation=vertical]:grid-cols-[auto_1fr] data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-x-8",
				className,
			)}
			data-orientation={orientation}
			data-slot="tabs"
			{...otherProps}
		/>
	);
}

interface TabsListProps extends BaseTabs.List.Props {}

export function TabsList(props: TabsListProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseTabs.List
			className={cn(
				"relative z-0 flex w-fit rounded-xl bg-slate-100/80 p-1.5 shadow-inner backdrop-blur-md dark:bg-slate-900/50 dark:shadow-black/20",
				"data-[orientation=vertical]:flex-col",
				className,
			)}
			data-slot="tabs-list"
			{...otherProps}
		/>
	);
}

interface TabsTabProps extends BaseTabs.Tab.Props {}

export function TabsTab(props: TabsTabProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseTabs.Tab
			className={cn(
				"relative z-10 flex h-9 min-w-24 items-center justify-center break-keep rounded-lg px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-950",
				"text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
				"data-selected:text-indigo-700 dark:data-selected:text-indigo-300",
				className,
			)}
			data-slot="tabs-tab"
			{...otherProps}
		/>
	);
}

interface TabsIndicatorProps extends BaseTabs.Indicator.Props {}

export function TabsIndicator(props: TabsIndicatorProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseTabs.Indicator
			className={cn(
				"absolute -z-10 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 ease-out dark:bg-slate-800 dark:ring-slate-700",
				// Horizontal positioning logic
				"data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:h-[calc(100%-12px)] data-[orientation=horizontal]:w-(--active-tab-width) data-[orientation=horizontal]:-translate-y-1/2 data-[orientation=horizontal]:translate-x-(--active-tab-left)",
				// Vertical positioning logic
				"data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:top-0 data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-[calc(100%-12px)] data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:translate-y-(--active-tab-top)",
				className,
			)}
			data-slot="tabs-indicator"
			{...otherProps}
		/>
	);
}

interface TabsPanelProps extends BaseTabs.Panel.Props {}

export function TabsPanel(props: TabsPanelProps) {
	const { className, ...otherProps } = props;
	return (
		<BaseTabs.Panel
			className={cn(
				"flex-1 rounded-xl text-sm leading-relaxed text-slate-700 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-slate-300 dark:focus-visible:ring-indigo-400 dark:focus-visible:ring-offset-slate-950",
				className,
			)}
			data-slot="tabs-panel"
			{...otherProps}
		/>
	);
}
