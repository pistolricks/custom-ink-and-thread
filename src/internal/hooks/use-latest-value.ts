import {createSignal, onCleanup} from 'solid-js';
import {useIsoMorphicEffect} from './use-iso-morphic-effect';

export function useLatestValue<T>(value: T) {
    const [cache, setCache] = createSignal(value);

    useIsoMorphicEffect(() => {
        setCache(() => value);
    }, () => [value]);

    return cache;
}