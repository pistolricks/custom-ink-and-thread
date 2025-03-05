import {createMemo, createSignal, JSX, JSXElement, onCleanup} from 'solid-js';
import DOMAttributes = JSX.DOMAttributes;


export interface HoverEvent {
    /** The type of hover event being fired. */
    type: 'hoverstart' | 'hoverend',
    /** The pointer type that triggered the hover event. */
    pointerType: 'mouse' | 'pen',
    /** The target element of the hover event. */
    target: HTMLElement
}

export interface HoverEvents {
    /** Handler that is called when a hover interaction starts. */
    onHoverStart?: (e: HoverEvent) => void,
    /** Handler that is called when a hover interaction ends. */
    onHoverEnd?: (e: HoverEvent) => void,
    /** Handler that is called when the hover state changes. */
    onHoverChange?: (isHovering: boolean) => void
}


// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore emulated events so they do not trigger hover behavior.
let globalIgnoreEmulatedMouseEvents = false;
let hoverCount = 0;

function setGlobalIgnoreEmulatedMouseEvents() {
    globalIgnoreEmulatedMouseEvents = true;

    // Clear globalIgnoreEmulatedMouseEvents after a short timeout (to prevent iOS quirks).
    setTimeout(() => {
        globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}

function handleGlobalPointerEvent(e: PointerEvent) {
    if (e.pointerType === 'touch') {
        setGlobalIgnoreEmulatedMouseEvents();
    }
}

function setupGlobalTouchEvents() {
    if (typeof document === 'undefined') {
        return;
    }

    if (typeof PointerEvent !== 'undefined') {
        document.addEventListener('pointerup', handleGlobalPointerEvent);
    } else {
        document.addEventListener('touchend', setGlobalIgnoreEmulatedMouseEvents);
    }

    hoverCount++;
    onCleanup(() => {
        hoverCount--;
        if (hoverCount > 0) {
            return;
        }

        if (typeof PointerEvent !== 'undefined') {
            document.removeEventListener('pointerup', handleGlobalPointerEvent);
        } else {
            document.removeEventListener('touchend', setGlobalIgnoreEmulatedMouseEvents);
        }
    });
}

export interface HoverProps extends HoverEvents {
    /** Whether the hover events should be disabled. */
    isDisabled?: boolean;
}

export interface HoverResult {
    /** Props to spread on the target element. */
    hoverProps: DOMAttributes<HTMLElement>;
    isHovered: boolean;
}

/**
 * Handles pointer hover interactions for an element. Normalizes behavior
 * across browsers and platforms, and ignores emulated mouse events on touch devices.
 */
export function useHover(props: HoverProps): HoverResult {
    const {onHoverStart, onHoverChange, onHoverEnd, isDisabled} = props;

    const [isHovered, setHovered] = createSignal(false);
    const state = {
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null as null | HTMLElement,
    };

    setupGlobalTouchEvents();

    const memoizedResult = createMemo(() => {
        const triggerHoverStart = (event: PointerEvent | MouseEvent, pointerType: string) => {
            state.pointerType = pointerType;

            if (
                isDisabled ||
                pointerType === 'touch' ||
                state.isHovered ||
                !(event.currentTarget as HTMLElement).contains(event.target as Element)
            ) {
                return;
            }

            state.isHovered = true;
            state.target = event.currentTarget as HTMLElement;

            // Handle pointerover for cleanup when hovered target is removed.
            const onPointerOver = (e: PointerEvent) => {
                if (state.isHovered && state.target && !(state.target as Element).contains(e.target as Element)) {
                    triggerHoverEnd(e, e.pointerType);
                }
            };

            document.addEventListener('pointerover', onPointerOver, {capture: true});
            onCleanup(() => document.removeEventListener('pointerover', onPointerOver));

            if (onHoverStart) {
                onHoverStart({
                    type: 'hoverstart',
                    target: state.target as HTMLElement,
                    pointerType: pointerType as 'mouse' | 'pen',
                });
            }

            if (onHoverChange) {
                onHoverChange(true);
            }

            setHovered(true);
        };

        const triggerHoverEnd = (event: PointerEvent | MouseEvent, pointerType: string) => {
            const target = state.target;
            state.pointerType = '';
            state.target = null;

            if (pointerType === 'touch' || !state.isHovered || !target) {
                return;
            }

            state.isHovered = false;

            if (onHoverEnd) {
                onHoverEnd({
                    type: 'hoverend',
                    target: target as HTMLElement,
                    pointerType: pointerType as 'mouse' | 'pen',
                });
            }

            if (onHoverChange) {
                onHoverChange(false);
            }

            setHovered(false);
        };

        const hoverProps: DOMAttributes<HTMLElement> = {};

        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e: PointerEvent) => {
                if (globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') {
                    return;
                }

                triggerHoverStart(e, e.pointerType);
            };

            hoverProps.onPointerLeave = (e: PointerEvent) => {
                if (!isDisabled && (e.currentTarget as HTMLElement).contains(e.target as Element)) {
                    triggerHoverEnd(e, e.pointerType);
                }
            };
        } else {
            hoverProps.onTouchStart = () => {
                state.ignoreEmulatedMouseEvents = true;
            };

            hoverProps.onMouseEnter = (e: MouseEvent) => {
                if (!state.ignoreEmulatedMouseEvents && !globalIgnoreEmulatedMouseEvents) {
                    triggerHoverStart(e, 'mouse');
                }

                state.ignoreEmulatedMouseEvents = false;
            };

            hoverProps.onMouseLeave = (e: MouseEvent) => {
                if (!isDisabled && (e.currentTarget as HTMLElement).contains(e.target as Element)) {
                    triggerHoverEnd(e, 'mouse');
                }
            };
        }

        return {hoverProps, triggerHoverEnd};
    });

    const {hoverProps, triggerHoverEnd} = memoizedResult();
    if (isDisabled) {
        triggerHoverEnd({currentTarget: state.target} as PointerEvent, state.pointerType);
        return {hoverProps, isHovered: isHovered()};

    }


    return {
        hoverProps,
        isHovered: isHovered(),
    };
}
