import { Splitter, useSplitter } from '@ark-ui/solid/splitter'

export const RootProvider = () => {
    const splitter = useSplitter({ size: [{ id: 'a', size: 50 }] })

    return (
        <>
            <button onClick={() => splitter().setToMaxSize('a')}>Maximize a</button>

            <Splitter.RootProvider value={splitter}>
                <Splitter.Panel id="a">A</Splitter.Panel>
                <Splitter.ResizeTrigger id="a:b" />
                <Splitter.Panel id="b">B</Splitter.Panel>
            </Splitter.RootProvider>
        </>
    )
}



export const Vertical = () => (
    <Splitter.Root
        orientation="vertical"
        size={[
            { id: 'a', size: 50 },
            { id: 'b', size: 50 },
        ]}
    >
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" />
        <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
)



export const Events = () => (
    <Splitter.Root
        size={[
            { id: 'a', size: 50 },
            { id: 'b', size: 50 },
        ]}
        onSizeChange={(details) => console.log('onSizeChange', details)}
        onSizeChangeEnd={(details) => console.log('onSizeChangeEnd', details)}
    >
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" />
        <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
)



export const RenderProp = () => (
    <Splitter.Root
        size={[
            { id: 'a', size: 50 },
            { id: 'b', size: 50 },
        ]}
    >
        <Splitter.Context>
            {(api) => (
                <>
                    <Splitter.Panel id="a">
                        <button type="button" onClick={() => api().setSize('a', 10)}>
                            Set to 10%
                        </button>
                    </Splitter.Panel>
                    <Splitter.ResizeTrigger id="a:b" />
                    <Splitter.Panel id="b">
                        <button type="button" onClick={() => api().setSize('b', 10)}>
                            Set to 10%
                        </button>
                    </Splitter.Panel>
                </>
            )}
        </Splitter.Context>
    </Splitter.Root>
)



export const Basic = () => (
    <Splitter.Root
        size={[
            { id: 'a', size: 50 },
            { id: 'b', size: 50 },
        ]}
    >
        <Splitter.Panel id="a">A</Splitter.Panel>
        <Splitter.ResizeTrigger id="a:b" />
        <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
)
