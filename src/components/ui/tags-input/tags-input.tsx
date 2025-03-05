import { TagsInput, useTagsInput } from '@ark-ui/solid/tags-input'
import { Index } from 'solid-js'

export const RootProvider = () => {
    const tagsInput = useTagsInput()

    return (
        <>
            <button onClick={() => tagsInput().focus()}>Focus</button>

            <TagsInput.RootProvider value={tagsInput}>
                <TagsInput.Context>
                    {(api) => (
                        <>
                            <TagsInput.Label>Frameworks</TagsInput.Label>
                            <TagsInput.Control>
                                <Index each={api().value}>
                                    {(value, index) => (
                                        <TagsInput.Item index={index} value={value()}>
                                            <TagsInput.ItemPreview>
                                                <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                                <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                            </TagsInput.ItemPreview>
                                            <TagsInput.ItemInput />
                                        </TagsInput.Item>
                                    )}
                                </Index>
                                <TagsInput.Input placeholder="Add Framework" />
                                <TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
                            </TagsInput.Control>
                        </>
                    )}
                </TagsInput.Context>
                <TagsInput.HiddenInput />
            </TagsInput.RootProvider>
        </>
    )
}

import { Field } from '@ark-ui/solid/field'


export const WithField = (props: Field.RootProps) => {
    return (
        <Field.Root {...props}>
            <TagsInput.Root>
                <TagsInput.Context>
                    {(tagsInput) => (
                        <>
                            <TagsInput.Label>Label</TagsInput.Label>
                            <Index each={tagsInput().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemPreview>
                                            <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                            <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                        </TagsInput.ItemPreview>
                                        <TagsInput.ItemInput />
                                    </TagsInput.Item>
                                )}
                            </Index>
                            <TagsInput.Input placeholder="Add Framework" />
                            <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                        </>
                    )}
                </TagsInput.Context>
                <TagsInput.HiddenInput />
            </TagsInput.Root>
            <Field.HelperText>Additional Info</Field.HelperText>
            <Field.ErrorText>Error Info</Field.ErrorText>
        </Field.Root>
    )
}



export const OnEvent = () => {
    return (
        <TagsInput.Root
            onValueChange={(details) => {
                console.log('tags changed to:', details.value)
            }}
            onHighlightChange={(details) => {
                console.log('highlighted tag:', details.highlightedValue)
            }}
            onValueInvalid={(details) => {
                console.log('Invalid!', details.reason)
            }}
            max={3}
            allowOverflow
            validate={(details) => {
                return !details.value.includes(details.inputValue)
            }}
        >
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const DisabledEditing = () => {
    return (
        <TagsInput.Root editable={false}>
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const PasteBehavior = () => {
    return (
        <TagsInput.Root addOnPaste delimiter=",">
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const BlurBehavior = () => {
    return (
        <TagsInput.Root blurBehavior="add">
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const Validated = () => {
    return (
        <TagsInput.Root
            validate={(details) => {
                return !details.value.includes(details.inputValue)
            }}
        >
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const MaxWithOverflow = () => {
    return (
        <TagsInput.Root max={3} allowOverflow>
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const InitialValue = () => {
    return (
        <TagsInput.Root value={['React', 'Solid', 'Vue']}>
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>Frameworks</TagsInput.Label>
                        <TagsInput.Control>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input placeholder="Add tag" />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}



export const Basic = () => (
    <TagsInput.Root>
        <TagsInput.Context>
            {(api) => (
                <>
                    <TagsInput.Label>Frameworks</TagsInput.Label>
                    <TagsInput.Control>
                        <Index each={api().value}>
                            {(value, index) => (
                                <TagsInput.Item index={index} value={value()}>
                                    <TagsInput.ItemPreview>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemDeleteTrigger>Delete</TagsInput.ItemDeleteTrigger>
                                    </TagsInput.ItemPreview>
                                    <TagsInput.ItemInput />
                                </TagsInput.Item>
                            )}
                        </Index>
                        <TagsInput.Input placeholder="Add Framework" />
                        <TagsInput.ClearTrigger>Clear All</TagsInput.ClearTrigger>
                    </TagsInput.Control>
                </>
            )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
    </TagsInput.Root>
)
