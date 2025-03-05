import { RatingGroup, useRatingGroup } from '@ark-ui/solid/rating-group'
import { StarIcon } from 'lucide-solid'
import { Index, Show } from 'solid-js'

export const RootProvider = () => {
    const ratingGroup = useRatingGroup({ count: 5, value: 3 })

    return (
        <>
            <button onClick={() => ratingGroup().clearValue()}>Clear</button>

            <RatingGroup.RootProvider value={ratingGroup}>
                <RatingGroup.Label>Label</RatingGroup.Label>
                <RatingGroup.Control>
                    <RatingGroup.Context>
                        {(context) => (
                            <Index each={context().items}>
                                {(index) => (
                                    <RatingGroup.Item index={index()}>
                                        <RatingGroup.ItemContext>
                                            {(context) => (
                                                <Show when={context().highlighted} fallback={<StarIcon />}>
                                                    <StarIcon fill="current" />
                                                </Show>
                                            )}
                                        </RatingGroup.ItemContext>
                                    </RatingGroup.Item>
                                )}
                            </Index>
                        )}
                    </RatingGroup.Context>
                    <RatingGroup.HiddenInput />
                </RatingGroup.Control>
            </RatingGroup.RootProvider>
        </>
    )
}

import { Field } from '@ark-ui/solid/field'


export const WithField = (props: Field.RootProps) => {
    return (
        <Field.Root {...props}>
            <RatingGroup.Root count={5} defaultValue={3}>
                <RatingGroup.Label>Label</RatingGroup.Label>
                <RatingGroup.Control>
                    <RatingGroup.Context>
                        {(context) => (
                            <Index each={context().items}>
                                {(index) => (
                                    <RatingGroup.Item index={index()}>
                                        <RatingGroup.ItemContext>
                                            {(context) => (
                                                <Show when={context().highlighted} fallback={<StarIcon />}>
                                                    <StarIcon fill="current" />
                                                </Show>
                                            )}
                                        </RatingGroup.ItemContext>
                                    </RatingGroup.Item>
                                )}
                            </Index>
                        )}
                    </RatingGroup.Context>
                    <RatingGroup.HiddenInput />
                </RatingGroup.Control>
            </RatingGroup.Root>

            <Field.HelperText>Additional Info</Field.HelperText>
            <Field.ErrorText>Error Info</Field.ErrorText>
        </Field.Root>
    )
}



export const FormUsage = () => (
    <RatingGroup.Root name="my-rating" count={5} value={3}>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) => (
                                        <Show when={context().highlighted} fallback={<StarIcon />}>
                                            <StarIcon fill="current" />
                                        </Show>
                                    )}
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)



export const ReadOnly = () => (
    <RatingGroup.Root count={5} value={3} readOnly>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) => (
                                        <Show when={context().highlighted} fallback={<StarIcon />}>
                                            <StarIcon fill="current" />
                                        </Show>
                                    )}
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)



export const Disabled = () => (
    <RatingGroup.Root count={5} value={3} disabled>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) => (
                                        <Show when={context().highlighted} fallback={<StarIcon />}>
                                            <StarIcon fill="current" />
                                        </Show>
                                    )}
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)

import { RatingGroup } from '@ark-ui/solid/rating-group'
import { StarIcon } from 'lucide-solid'
import { Index, Show, createSignal } from 'solid-js'

export const Controlled = () => {
    const [value, setValue] = createSignal(0)

    return (
        <RatingGroup.Root count={5} value={value()} onValueChange={(details) => setValue(details.value)}>
            <RatingGroup.Label>Label</RatingGroup.Label>
            <RatingGroup.Control>
                <RatingGroup.Context>
                    {(context) => (
                        <Index each={context().items}>
                            {(index) => (
                                <RatingGroup.Item index={index()}>
                                    <RatingGroup.ItemContext>
                                        {(context) => (
                                            <Show when={context().highlighted} fallback={<StarIcon />}>
                                                <StarIcon fill="current" />
                                            </Show>
                                        )}
                                    </RatingGroup.ItemContext>
                                </RatingGroup.Item>
                            )}
                        </Index>
                    )}
                </RatingGroup.Context>
                <RatingGroup.HiddenInput />
            </RatingGroup.Control>
        </RatingGroup.Root>
    )
}




export const InitialValue = () => (
    <RatingGroup.Root count={5} value={2} readOnly>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) => (
                                        <Show when={context().highlighted} fallback={<StarIcon />}>
                                            <StarIcon fill="current" />
                                        </Show>
                                    )}
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)

import { RatingGroup } from '@ark-ui/solid/rating-group'
import { StarHalfIcon, StarIcon } from 'lucide-solid'
import { Index } from 'solid-js'

export const HalfRatings = () => (
    <RatingGroup.Root count={5} value={3} allowHalf>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) =>
                                        context().half ? (
                                            <StarHalfIcon fill="current" />
                                        ) : context().highlighted ? (
                                            <StarIcon fill="current" />
                                        ) : (
                                            <StarIcon />
                                        )
                                    }
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)



export const Basic = () => (
    <RatingGroup.Root count={5} value={3}>
        <RatingGroup.Label>Label</RatingGroup.Label>
        <RatingGroup.Control>
            <RatingGroup.Context>
                {(context) => (
                    <Index each={context().items}>
                        {(index) => (
                            <RatingGroup.Item index={index()}>
                                <RatingGroup.ItemContext>
                                    {(context) => (
                                        <Show when={context().highlighted} fallback={<StarIcon />}>
                                            <StarIcon fill="current" />
                                        </Show>
                                    )}
                                </RatingGroup.ItemContext>
                            </RatingGroup.Item>
                        )}
                    </Index>
                )}
            </RatingGroup.Context>
            <RatingGroup.HiddenInput />
        </RatingGroup.Control>
    </RatingGroup.Root>
)
