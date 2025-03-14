import { cn } from "~/lib/ui";
import {
	type JSX,
	type ParentComponent,
	mergeProps,
	splitProps,
} from "solid-js";

export interface AnimatedShinyTextProps
	extends JSX.HTMLAttributes<HTMLParagraphElement> {
	shimmerWidth?: number;
}

export const AnimatedShinyText: ParentComponent<AnimatedShinyTextProps> = (
	props,
) => {
	const [_localProps, forwardProps] = splitProps(props, [
		"shimmerWidth",
		"class",
		"children",
	]);
	const localProps = mergeProps({ shimmerWidth: 100 }, _localProps);

	return (
		<p
			style={{
				"--shiny-width": `${localProps.shimmerWidth}px`,
			}}
			class={cn(
				"mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

				// Shine effect
				"animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

				// Shine gradient
				"bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

				localProps.class,
			)}
			{...forwardProps}
		>
			{localProps.children}
		</p>
	);
};
