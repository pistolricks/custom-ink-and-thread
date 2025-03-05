import { HoverCard, useHoverCard } from '@ark-ui/solid/hover-card'
import { Portal } from 'solid-js/web'

export const RootProvider = () => {
    const hoverCard = useHoverCard()

    return (
        <>
            <button onClick={() => hoverCard().setOpen(true)}>Open</button>

            <HoverCard.RootProvider value={hoverCard}>
                <HoverCard.Trigger>Hover me</HoverCard.Trigger>
                <Portal>
                    <HoverCard.Positioner>
                        <HoverCard.Content>
                            <HoverCard.Arrow>
                                <HoverCard.ArrowTip />
                            </HoverCard.Arrow>
                            Content
                        </HoverCard.Content>
                    </HoverCard.Positioner>
                </Portal>
            </HoverCard.RootProvider>
        </>
    )
}


export const RenderProp = () => (
    <HoverCard.Root>
        <HoverCard.Context>
            {(context) => <HoverCard.Trigger>Hover me {context().open ? '▲' : '▼'} </HoverCard.Trigger>}
        </HoverCard.Context>
        <Portal>
            <HoverCard.Positioner>
                <HoverCard.Content>
                    <HoverCard.Arrow>
                        <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    Content
                </HoverCard.Content>
            </HoverCard.Positioner>
        </Portal>
    </HoverCard.Root>
)



export const Positioning = () => (
    <HoverCard.Root positioning={{ placement: 'right', gutter: 12 }}>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
        <Portal>
            <HoverCard.Positioner>
                <HoverCard.Content>
                    <HoverCard.Arrow>
                        <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    Content
                </HoverCard.Content>
            </HoverCard.Positioner>
        </Portal>
    </HoverCard.Root>
)

import { HoverCard } from '@ark-ui/solid/hover-card'
import { createSignal } from 'solid-js'
import { Portal } from 'solid-js/web'

export const Controlled = () => {
    const [isOpen, setOpen] = createSignal(false)
    return (
        <>
            <button type="button" onClick={() => setOpen(!isOpen)}>
                click me
            </button>
            <HoverCard.Root open={isOpen()} onOpenChange={() => setOpen(false)}>
                <HoverCard.Trigger>Hover me</HoverCard.Trigger>
                <Portal>
                    <HoverCard.Positioner>
                        <HoverCard.Content>
                            <HoverCard.Arrow>
                                <HoverCard.ArrowTip />
                            </HoverCard.Arrow>
                            Content
                        </HoverCard.Content>
                    </HoverCard.Positioner>
                </Portal>
            </HoverCard.Root>
        </>
    )
}



export const Basic = () => (
    <HoverCard.Root>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
        <Portal>
            <HoverCard.Positioner>
                <HoverCard.Content>
                    <HoverCard.Arrow>
                        <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    Content
                </HoverCard.Content>
            </HoverCard.Positioner>
        </Portal>
    </HoverCard.Root>
)
