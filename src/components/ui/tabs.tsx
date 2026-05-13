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
				"data-[orientation=horizontal]:grid-cols-1 data-[orientation=horizontal]:gap-y-4",
				"data-[orientation=vertical]:grid-cols-[auto_1fr] data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-x-4",
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
				"bg-slate-200 relative w-fit rounded-lg z-0 px-1",
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
				"break-keep whitespace-nowrap h-8 px-2 min-w-20 font-medium text-sm",
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
				"absolute -z-10 rounded-lg top-1/2 left-0 h-6 w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 bg-slate-100 transition-all",
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
			className={cn("flex-1 text-sm outline-none", className)}
			data-slot="tabs-panel"
			{...otherProps}
		/>
	);
}
