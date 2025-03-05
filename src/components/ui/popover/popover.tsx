import { Popover, usePopover } from '@ark-ui/solid/popover'
import { Portal } from 'solid-js/web'
import { ChevronRightIcon } from 'lucide-solid'
export const RootProvider = () => {
    const popover = usePopover()

    return (
        <>
            <button onClick={() => popover().setOpen(true)}>Popover is {popover().open ? 'open' : 'closed'}</button>

            <Popover.RootProvider value={popover}>
                <Popover.Trigger>
                    Click Me
                    <Popover.Indicator>
                        <ChevronRightIcon />
                    </Popover.Indicator>
                </Popover.Trigger>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Title>Title</Popover.Title>
                        <Popover.Description>Description</Popover.Description>
                    </Popover.Content>
                </Popover.Positioner>
            </Popover.RootProvider>
        </>
    )
}



export const Modal = () => (
    <Popover.Root modal>
        <Popover.Trigger>Click Me</Popover.Trigger>
        <Popover.Positioner>
            <Popover.Content>
                <Popover.Title>Title</Popover.Title>
                <Popover.Description>Description</Popover.Description>
                <Popover.CloseTrigger>Close</Popover.CloseTrigger>
            </Popover.Content>
        </Popover.Positioner>
    </Popover.Root>
)



export const Positioning = () => (
    <Popover.Root
        positioning={{
            placement: 'left-start',
            offset: { mainAxis: 12, crossAxis: 12 },
        }}
    >
        <Popover.Trigger>Click Me</Popover.Trigger>
        <Popover.Positioner>
            <Popover.Content>
                <Popover.Title>Title</Popover.Title>
                <Popover.Description>Description</Popover.Description>
                <Popover.CloseTrigger>Close</Popover.CloseTrigger>
            </Popover.Content>
        </Popover.Positioner>
    </Popover.Root>
)


import { Portal } from 'solid-js/web'

export const CloseBehavior = () => (
    <Popover.Root closeOnEscape={false} closeOnInteractOutside={false}>
        <Popover.Trigger>Click Me</Popover.Trigger>
        <Portal>
            <Popover.Positioner>
                <Popover.Content>
                    <Popover.Title>Title</Popover.Title>
                    <Popover.Description>Description</Popover.Description>
                    <Popover.CloseTrigger>Close</Popover.CloseTrigger>
                </Popover.Content>
            </Popover.Positioner>
        </Portal>
    </Popover.Root>
)


import { createSignal } from 'solid-js'

export const Controlled = () => {
    const [isOpen, setIsOpen] = createSignal(false)
    return (
        <>
            <button type="button" onClick={() => setIsOpen(!isOpen())}>
                Toggle
            </button>
            <Popover.Root open={isOpen()}>
                <Popover.Anchor>Anchor</Popover.Anchor>
                <Popover.Positioner>
                    <Popover.Content>
                        <Popover.Title>Title</Popover.Title>
                        <Popover.Description>Description</Popover.Description>
                        <Popover.CloseTrigger>Close</Popover.CloseTrigger>
                    </Popover.Content>
                </Popover.Positioner>
            </Popover.Root>
        </>
    )
}



export const OnOpenChange = () => {
    return (
        <Popover.Root onOpenChange={(open) => alert(open ? 'opened' : 'closed')}>
            <Popover.Trigger>
                Click Me
                <Popover.Indicator>
                    <ChevronRightIcon />
                </Popover.Indicator>
            </Popover.Trigger>
            <Popover.Positioner>
                <Popover.Content>
                    <Popover.Title>Title</Popover.Title>
                    <Popover.Description>Description</Popover.Description>
                </Popover.Content>
            </Popover.Positioner>
        </Popover.Root>
    )
}



export const Arrow = () => (
    <Popover.Root>
        <Popover.Trigger>Click Me</Popover.Trigger>
        <Popover.Positioner>
            <Popover.Content>
                <Popover.Arrow>
                    <Popover.ArrowTip />
                </Popover.Arrow>
                <Popover.Title>Title</Popover.Title>
                <Popover.Description>Description</Popover.Description>
                <Popover.CloseTrigger>Close</Popover.CloseTrigger>
            </Popover.Content>
        </Popover.Positioner>
    </Popover.Root>
)



export const Portalled = () => (
    <Popover.Root portalled>
        <Popover.Trigger>
            Click Me
            <Popover.Indicator>
                <ChevronRightIcon />
            </Popover.Indicator>
        </Popover.Trigger>
        <Portal>
            <Popover.Positioner>
                <Popover.Content>
                    <Popover.Title>Title</Popover.Title>
                    <Popover.Description>Description</Popover.Description>
                </Popover.Content>
            </Popover.Positioner>
        </Portal>
    </Popover.Root>
)

