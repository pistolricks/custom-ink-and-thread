import {createSignal, onCleanup} from 'solid-js';

export let useEvent =
    function useEvent<
        F extends (...args: any[]) => any,
        P extends any[] = Parameters<F>,
        R = ReturnType<F>,
    >(cb: (...args: P) => R) {
        const [getCache, setCache] = createSignal(cb);
        setCache(() => cb); // Ensure the cache stays updated if the callback changes

        onCleanup(() => {
            setCache(() => (() => null) as unknown as (...args: P) => R); // Clean up the signal
        });

        return (...args: P) => getCache()!(...args); // Safely call the current callback
    }