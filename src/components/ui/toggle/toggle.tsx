import { Toggle } from '@ark-ui/solid/toggle'
import { Volume, VolumeOff } from 'lucide-solid'
import { BoldIcon } from 'lucide-solid'
import { Show, createSignal } from 'solid-js'

export const Indicator = () => {
    return (
        <Toggle.Root>
            <Toggle.Indicator fallback={<Volume />}>
                <VolumeOff />
            </Toggle.Indicator>
        </Toggle.Root>
    )
}



export const Disabled = () => {
    return (
        <Toggle.Root disabled>
            <BoldIcon />
        </Toggle.Root>
    )
}



export const Controlled = () => {
    const [pressed, setPressed] = createSignal(false)
    return (
        <div>
            <Toggle.Root pressed={pressed} onPressedChange={setPressed}>
                <Show when={pressed()} fallback={<VolumeOff />}>
                    <Volume />
                </Show>
            </Toggle.Root>
            <p>Volume is {pressed() ? 'unmuted' : 'muted'}</p>
        </div>
    )
}



export const Basic = () => {
    return (
        <Toggle.Root>
            <BoldIcon />
        </Toggle.Root>
    )
}
