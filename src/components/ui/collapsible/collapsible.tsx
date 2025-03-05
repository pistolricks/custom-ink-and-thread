import { Collapsible, useCollapsible } from '@ark-ui/solid/collapsible'

export const RootProvider = () => {
    const collapsible = useCollapsible()

    return (
        <>
            <span>{collapsible().visible ? 'Visible' : 'Hidden'}</span>

            <Collapsible.RootProvider value={collapsible}>
                <Collapsible.Trigger>Toggle</Collapsible.Trigger>
                <Collapsible.Content>Content</Collapsible.Content>
            </Collapsible.RootProvider>
        </>
    )
}

import { Collapsible } from '@ark-ui/solid/collapsible'


export const OnExitComplete = () => (
    <Collapsible.Root onExitComplete={() => alert('on exit')}>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
)




export const LazyMountAndUnmountOnExit = () => (
    <Collapsible.Root lazyMount unmountOnExit>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
)



export const UnmountOnExit = () => (
    <Collapsible.Root unmountOnExit>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
)



export const LazyMount = () => (
    <Collapsible.Root lazyMount>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
)



export const Basic = () => (
    <Collapsible.Root>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
    </Collapsible.Root>
)
