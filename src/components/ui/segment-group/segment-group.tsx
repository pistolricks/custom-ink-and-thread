import { SegmentGroup, useSegmentGroup } from '@ark-ui/solid/segment-group'
import { Index, createSignal } from 'solid-js'
export const RootProvider = () => {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
    const segmentGroup = useSegmentGroup()

    return (
        <>
            <button onClick={() => segmentGroup().focus()}>Focus</button>

            <SegmentGroup.RootProvider value={segmentGroup}>
                <SegmentGroup.Indicator />
                <Index each={frameworks}>
                    {(framework) => (
                        <SegmentGroup.Item value={framework()}>
                            <SegmentGroup.ItemText>{framework()}</SegmentGroup.ItemText>
                            <SegmentGroup.ItemControl />
                            <SegmentGroup.ItemHiddenInput />
                        </SegmentGroup.Item>
                    )}
                </Index>
            </SegmentGroup.RootProvider>
        </>
    )
}



export const Disabled = () => {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
    return (
        <SegmentGroup.Root value={'React'}>
            <SegmentGroup.Indicator />
            <Index each={frameworks}>
                {(framework) => (
                    <SegmentGroup.Item value={framework()} disabled={framework() === 'Svelte'}>
                        <SegmentGroup.ItemText>{framework()}</SegmentGroup.ItemText>
                        <SegmentGroup.ItemControl />
                        <SegmentGroup.ItemHiddenInput />
                    </SegmentGroup.Item>
                )}
            </Index>
        </SegmentGroup.Root>
    )
}



export const Controlled = () => {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
    const [value, setValue] = createSignal('React')
    return (
        <SegmentGroup.Root value={value()} onValueChange={(e) => setValue(e.value)}>
            <SegmentGroup.Indicator />
            <Index each={frameworks}>
                {(framework) => (
                    <SegmentGroup.Item value={framework()}>
                        <SegmentGroup.ItemText>{framework()}</SegmentGroup.ItemText>
                        <SegmentGroup.ItemControl />
                        <SegmentGroup.ItemHiddenInput />
                    </SegmentGroup.Item>
                )}
            </Index>
        </SegmentGroup.Root>
    )
}



export const InitialValue = () => {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
    return (
        <SegmentGroup.Root value="React">
            <SegmentGroup.Indicator />
            <Index each={frameworks}>
                {(framework) => (
                    <SegmentGroup.Item value={framework()}>
                        <SegmentGroup.ItemText>{framework()}</SegmentGroup.ItemText>
                        <SegmentGroup.ItemControl />
                        <SegmentGroup.ItemHiddenInput />
                    </SegmentGroup.Item>
                )}
            </Index>
        </SegmentGroup.Root>
    )
}



export const Basic = () => {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']
    return (
        <SegmentGroup.Root>
            <SegmentGroup.Indicator />
            <Index each={frameworks}>
                {(framework) => (
                    <SegmentGroup.Item value={framework()}>
                        <SegmentGroup.ItemText>{framework()}</SegmentGroup.ItemText>
                        <SegmentGroup.ItemControl />
                        <SegmentGroup.ItemHiddenInput />
                    </SegmentGroup.Item>
                )}
            </Index>
        </SegmentGroup.Root>
    )
}
