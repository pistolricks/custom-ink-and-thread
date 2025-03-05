import {splitProps, Component, children, mergeProps, createSignal, createMemo, JSX, JSXElement} from "solid-js";
import { useFocusRing } from "~/internal/hooks/use-focus-ring";
import { useHover } from "~/internal/hooks/use-hover";
import { useActivePress } from "~/internal/hooks/use-active-press";
import { useDisabledContext } from "~/context/disabled";
import type {  Props } from "~/internal/types";
import { useRender } from "~/internal/utils/render";
import type { Component as As } from "solid-js";
const DEFAULT_BUTTON_TAG = ((props: JSX.IntrinsicElements["button"]) => <button {...props} />) as unknown as As;

type ButtonRenderPropArg = {
    disabled: boolean;
    hover: boolean;
    focus: boolean;
    active: boolean;
    autofocus: boolean;
};

type ButtonPropsWeControl = never;

export type ButtonProps<TTag extends As = typeof DEFAULT_BUTTON_TAG> = Props<
    TTag,
    ButtonRenderPropArg,
    ButtonPropsWeControl,
    {
        disabled?: boolean;
        autoFocus?: boolean;
        type?: "button" | "submit" | "reset";
    }
>;


let forwardRef = (Component: (props: any, ref: any) => JSXElement) =>
    (props: any) => <Component {...props} ref={props.ref}>{children}</Component>;

function ButtonFn<TTag extends As = typeof DEFAULT_BUTTON_TAG>(
    props: ButtonProps<TTag>,
    ref: (el: HTMLElement) => void
) {
    const providedDisabled = useDisabledContext();

    // Split props into `local` (our controlled props) and `others` (props pAssed by the user)
    const [local, others] = splitProps(props, ["disabled", "autoFocus", "type"]);

    const disabled = () => local.disabled ?? providedDisabled ?? false;
    const autoFocus = () => local.autoFocus ?? false;

    const { isFocusVisible: focus, focusProps } = useFocusRing({ autoFocus: autoFocus() });
    const { isHovered: hover, hoverProps } = useHover({ isDisabled: !!disabled() });
    const { pressed: active, pressProps } = useActivePress({ disabled: !!disabled() });

    const ourProps = mergeProps(
        {
            ref, // Solid forwards refs differently (using functions)
            type: local.type ?? "button",
            disabled: disabled() || undefined,
            autoFocus: autoFocus(),
        },
        focusProps,
        hoverProps,
        pressProps
    );

    const slot = createMemo(() => ({
        disabled: disabled(),
        hover: hover,
        focus: focus,
        active: active,
        autofocus: autoFocus(),
    }));

    const render = useRender();

    return render({
        ourProps,
        theirProps: others,
        slot: slot(),
        defaultTag: DEFAULT_BUTTON_TAG,
        name: "Button",
        features: {

        }, // Provide an appropriate value for `features` if applicable
    });
}

export let Button: Component<ButtonProps<typeof DEFAULT_BUTTON_TAG>> = forwardRef(ButtonFn)

