import { Accordion, useAccordion } from '@ark-ui/solid/accordion'
import { ChevronDownIcon } from 'lucide-solid'
import { Index } from 'solid-js'


export const RootProvider = () => {
    const accordion = useAccordion({ defaultValue: ['React'] })

    return (
        <>
            <button onClick={() => accordion().setValue(['Vue'])}>Set to Vue</button>

            <Accordion.RootProvider value={accordion}>
                <Index each={['React', 'Solid', 'Vue']}>
                    {(item) => (
                        <Accordion.Item value={item()}>
                            <Accordion.ItemTrigger>
                                What is {item()}?
                                <Accordion.ItemIndicator>
                                    <ChevronDownIcon />
                                </Accordion.ItemIndicator>
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                {item()} is a JavaScript library for building user interfaces.
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    )}
                </Index>
            </Accordion.RootProvider>
        </>
    )
}



export const Horizontal = () => {
    return (
        <Accordion.Root defaultValue={['React']} orientation="horizontal">
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const Multiple = () => {
    return (
        <Accordion.Root value={['React']} multiple>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const Collapsible = () => {
    return (
        <Accordion.Root value={['React']} collapsible>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const Basic = () => {
    return (
        <Accordion.Root defaultValue={['React']}>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const ContextFocusedValue = () => {
    return (
        <Accordion.Root defaultValue={['React']}>
            <Accordion.Context>{(context) => <span>Focused item: {context().focusedValue}</span>}</Accordion.Context>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}


export const ContextValue = () => {
    return (
        <Accordion.Root defaultValue={['React']}>
            <Accordion.Context>{(context) => <span>Selected items: {context().value.join(', ')}</span>}</Accordion.Context>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const ContextSetValue = () => {
    return (
        <Accordion.Root defaultValue={['React']}>
            <Accordion.Context>
                {(context) => <button onClick={() => context().setValue(['Vue'])}>Select Vue</button>}
            </Accordion.Context>
            <Index each={['React', 'Solid', 'Vue']}>
                {(item) => (
                    <Accordion.Item value={item()}>
                        <Accordion.ItemTrigger>
                            What is {item()}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item()} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}



export const ContextGetItemState = () => {
    const items = [{ value: 'React' }, { value: 'Solid', disabled: true }, { value: 'Vue' }]
    return (
        <Accordion.Root defaultValue={['React']}>
            <Accordion.Context>
                {(context) => {
                    const itemState = context().getItemState(items[2])
                    return (
                        <>
                            <b>Vue State: </b>
                            <span>Disabled: {itemState.disabled ? 'Y' : 'N'} </span>
                            <span>Expanded: {itemState.expanded ? 'Y' : 'N'} </span>
                            <span>Focused: {itemState.focused ? 'Y' : 'N'} </span>
                        </>
                    )
                }}
            </Accordion.Context>
            <Index each={items}>
                {(item) => (
                    <Accordion.Item {...item()}>
                        <Accordion.ItemTrigger>
                            What is {item().value}?
                            <Accordion.ItemIndicator>
                                <ChevronDownIcon />
                            </Accordion.ItemIndicator>
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            {item().value} is a JavaScript library for building user interfaces.
                        </Accordion.ItemContent>
                    </Accordion.Item>
                )}
            </Index>
        </Accordion.Root>
    )
}
