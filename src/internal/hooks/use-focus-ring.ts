import

{
    Accessor, createEffect, createSignal, onCleanup
}
    from
        "solid-js";

export interface AriaFocusRingProps {
    /**
     * Whether to show the focus ring when something
     * inside the container element has focus (true), or
     * only if the container itself has focus (false).
     * @default 'false'
     */
    within?: boolean;

    /** Whether the element is a text input. */
    isTextInput?: boolean;

    /** Whether the element will be auto focused. */
    autoFocus?: boolean;
}

export interface FocusRingAria {
    /** Whether the element is currently focused. */
    isFocused: Accessor<boolean>;

    /** Whether keyboard focus should be visible. */
    isFocusVisible: Accessor<boolean>;

    /** Props to apply to the container element with the focus ring. */
    focusProps: {
        onFocus: (e: FocusEvent) => void;
        onBlur: (e: FocusEvent) => void;
    };
}

/**
 * Determines whether a focus ring should be shown to indicate keyboard focus.
 * Focus rings are visible only when the user is interacting with a keyboard,
 * not with a mouse, touch, or other input methods.
 */
export function useFocusRing(props: AriaFocusRingProps = {}): FocusRingAria {
    const {autoFocus = false, isTextInput, within} = props;

    let isFocusVisible = autoFocus || getFocusVisibleStatus(); // Solid doesn't track global focus state, so simulate this
    const [isFocused, setFocused] = createSignal(false);
    const [isFocusVisibleState, setFocusVisible] = createSignal(autoFocus && isFocusVisible);

    const updateState = () => {
        setFocusVisible(isFocused() && isFocusVisible);
    };

    function handleFocusChange(isFocusedParam: boolean) {
        setFocused(isFocusedParam);
        updateState();
    }

    function handleFocusVisibleChange(isFocusVisibleParam: boolean) {
        isFocusVisible = isFocusVisibleParam;
        updateState();
    }

    function onFocus(e: FocusEvent) {
        handleFocusChange(true);
        if (isFocusVisible) {
            handleFocusVisibleChange(true);
        }
    }

    function onBlur(e: FocusEvent) {
        handleFocusChange(false);
        handleFocusVisibleChange(false);
    }

    // Mimic React's `useFocusVisibleListener` for keyboard interactions
    createEffect(() => {
        const listener = (e: KeyboardEvent) => {
            isFocusVisible = true;
            updateState();
        };
        window.addEventListener("keydown", listener);

        const pointerListener = (e: PointerEvent) => {
            isFocusVisible = false;
            updateState();
        };
        window.addEventListener("pointerdown", pointerListener);

        onCleanup(() => {
            window.removeEventListener("keydown", listener);
            window.removeEventListener("pointerdown", pointerListener);
        });
    });

    return {
        isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: {onFocus, onBlur}
    };
}

// Helper function to simulate focus-visible detection
function getFocusVisibleStatus(): boolean {
    // This should determine if the focus is keyboard/assistive technology-driven
    // Solid.js doesn't provide a built-in equivalent of `isFocusVisible`, so add custom logic here
    return false; // Placeholder implementation
}