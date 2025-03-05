import {createSignal, onCleanup} from 'solid-js';
import {getOwnerDocument} from '../utils/owner';
import {useDisposables} from './use-disposables';
import {useEvent} from './use-event';

// Only the necessary props from a DOMRect
type Rect = { left: number; right: number; top: number; bottom: number };

function pointerRectFromPointerEvent(event: PointerEvent): Rect {
    // Center of the pointer geometry
    let offsetX = event.width / 2;
    let offsetY = event.height / 2;

    return {
        top: event.clientY - offsetY,
        right: event.clientX + offsetX,
        bottom: event.clientY + offsetY,
        left: event.clientX - offsetX,
    };
}

function areRectsOverlapping(a: Rect | null, b: Rect | null) {
    if (!a || !b) {
        return false;
    }

    if (a.right < b.left || a.left > b.right) {
        return false;
    }

    if (a.bottom < b.top || a.top > b.bottom) {
        return false;
    }

    return true;
}

export function useActivePress({disabled = false}: Partial<{ disabled: boolean }> = {}) {
    let target: HTMLElement | null = null;
    const [pressed, setPressed] = createSignal(false);
    const disposables = useDisposables();

    const reset = useEvent(() => {
        target = null;
        setPressed(false);
        disposables.dispose();
    });

    const handlePointerDown = useEvent((event: PointerEvent) => {
        disposables.dispose(); // Cancel any scheduled tasks

        if (target !== null) return;

        // Keep track of the current element
        target = event.currentTarget as HTMLElement;

        // We are definitely pressing the element now
        setPressed(true);

        // Setup global handlers to catch events on elements that are not the current element
        {
            const owner = getOwnerDocument(event.currentTarget as Element)!;

            // `pointerup` on any element means that we are no longer pressing the current element
            disposables.addEventListener(owner, 'pointerup', reset, false);

            // `pointerleave` isn't called consistently (if at all) on iOS Safari, so we use `pointermove` instead
            // to determine if we are still "pressing". We also compare the pointer position to the target element
            // so that we can tell if the pointer is still over the element or not.
            disposables.addEventListener(
                owner,
                'pointermove',
                (event: PointerEvent) => {
                    if (target) {
                        const pointerRect = pointerRectFromPointerEvent(event);
                        setPressed(areRectsOverlapping(pointerRect, target.getBoundingClientRect()));
                    }
                },
                false
            );

            // Whenever the browser decides to fire a `pointercancel` event, we should abort
            disposables.addEventListener(owner, 'pointercancel', reset, false);
        }
    });

    onCleanup(() => {
        disposables.dispose();
    });

    return {
        get pressed() {
            return pressed();
        },
        pressProps: disabled
            ? {}
            : {
                onPointerDown: handlePointerDown,
                onPointerUp: reset,
                onClick: reset,
            },
    };
}