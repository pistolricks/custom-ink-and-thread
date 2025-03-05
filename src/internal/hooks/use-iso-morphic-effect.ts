import {createEffect, createRenderEffect, type Accessor} from 'solid-js'
import { config } from 'dotenv';
config();

const env = process.env;

export let useIsoMorphicEffect = (effect: () => void, deps?: Accessor<any[]>) => {
    if (env.isServer) {
        createEffect(effect)
    } else {
        createRenderEffect(effect)
    }
}