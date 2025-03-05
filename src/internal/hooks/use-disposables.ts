import {createEffect, createSignal, onCleanup} from 'solid-js'
import {disposables} from '../utils/disposables'

/**
 * The `useDisposables` hook returns a `disposables` object that is disposed
 * when the component is unmounted.
 */
export function useDisposables() {
    // Using createSignal instead of useState so that we can use the initializer function.
    const [d] = createSignal(disposables())
    createEffect(() => {
        onCleanup(() => d().dispose())
    })
    return d()
}