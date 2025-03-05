import { ToggleGroup, useToggleGroup } from '@ark-ui/solid/toggle-group'

export const RootProvider = () => {
    const toggleGroup = useToggleGroup()

    return (
        <>
            <button onClick={() => toggleGroup().setValue(['b'])}>Set to B</button>

            <ToggleGroup.RootProvider value={toggleGroup}>
                <ToggleGroup.Item value="a">A</ToggleGroup.Item>
                <ToggleGroup.Item value="b">B</ToggleGroup.Item>
                <ToggleGroup.Item value="c">C</ToggleGroup.Item>
            </ToggleGroup.RootProvider>
        </>
    )
}



export const InitialValue = () => {
    return (
        <ToggleGroup.Root value={['b']}>
            <ToggleGroup.Item value="a">A</ToggleGroup.Item>
            <ToggleGroup.Item value="b">B</ToggleGroup.Item>
            <ToggleGroup.Item value="c">C</ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}



export const Multiple = () => {
    return (
        <ToggleGroup.Root multiple>
            <ToggleGroup.Item value="a">A</ToggleGroup.Item>
            <ToggleGroup.Item value="b">B</ToggleGroup.Item>
            <ToggleGroup.Item value="c">C</ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}



export const Basic = () => {
    return (
        <ToggleGroup.Root>
            <ToggleGroup.Item value="a">A</ToggleGroup.Item>
            <ToggleGroup.Item value="b">B</ToggleGroup.Item>
            <ToggleGroup.Item value="c">C</ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}
