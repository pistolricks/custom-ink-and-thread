import type {Accessor} from 'solid-js'
import { config } from 'dotenv';
config();

const env = process.env;

export function getOwnerDocument<T extends Element | { current: Accessor<Element | null> }>(
    element: T | null | undefined
): Document | null {
    if (env.isServer) return null
    if (!element) return document
    if ('ownerDocument' in element) return element.ownerDocument
    if ('current' in element) return element.current()?.ownerDocument ?? document

    return null
}