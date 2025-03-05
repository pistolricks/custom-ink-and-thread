import {JSX, mergeProps, ValidComponent} from "solid-js";
import clsx from 'clsx';
import {useFocusRing} from '~/internal/hooks/use-focus-ring';
import {Dynamic} from "solid-js/web";

export interface FocusRingProps {
    /** Child element to apply CSS classes to. */
    children: JSX.Element,
    component?: ValidComponent
    /** CSS class to apply when the element is focused. */
    focusClass?: string,
    /** CSS class to apply when the element has keyboard focus. */
    focusRingClass?: string,
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default false
     */
    within?: boolean,
    /** Whether the element is a text input. */
    isTextInput?: boolean,
    /** Whether the element will be auto focused. */
    autoFocus?: boolean
    class?: string
}

/**
 * A utility component that applies a CSS class when an element has keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function FocusRing(props: FocusRingProps) {
    const {component, children, focusClass, focusRingClass} = props;
    const {isFocused, isFocusVisible, focusProps} = useFocusRing(props);

    return (
        <Dynamic component={component}
            {...mergeProps(children as any, focusProps)}
            class={clsx(children,  props?.class, {
                [focusClass || '']: isFocused(),
                [focusRingClass || '']: isFocusVisible()
            })}
        />
    );
}
