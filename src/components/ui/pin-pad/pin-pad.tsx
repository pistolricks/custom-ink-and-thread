import { PinInput, usePinInput } from '@ark-ui/solid/pin-input'
import { Index } from 'solid-js'

export const RootProvider = () => {
    const pinInput = usePinInput({ onValueComplete: (e) => alert(e.valueAsString) })

    return (
        <>
            <button onClick={() => pinInput().focus()}>Focus</button>

            <PinInput.RootProvider value={pinInput}>
                <PinInput.Label>Label</PinInput.Label>
                <PinInput.Control>
                    <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
                </PinInput.Control>
                <PinInput.HiddenInput />
            </PinInput.RootProvider>
        </>
    )
}


export const OTPMode = () => (
    <PinInput.Root otp>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)


export const Blurred = () => (
    <PinInput.Root blurOnComplete>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)




export const Basic = () => (
    <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            {[0, 1, 2].map((id, index) => (
                <PinInput.Input key={id} index={index} />
            ))}
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)


export const Customized = () => (
    <PinInput.Root placeholder="*">
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)


export const InitialValue = () => (
    <PinInput.Root value={['1', '2', '3']}>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)



export const WithMask = () => (
    <PinInput.Root mask>
        <PinInput.Label>Label</PinInput.Label>
        <PinInput.Control>
            <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
        </PinInput.Control>
        <PinInput.HiddenInput />
    </PinInput.Root>
)


import { Field } from '@ark-ui/solid/field'

export const WithField = (props: Field.RootProps) => (
    <Field.Root {...props}>
        <PinInput.Root>
            <PinInput.Label>Label</PinInput.Label>
            <PinInput.Control>
                <Index each={[0, 1, 2]}>{(id) => <PinInput.Input index={id()} />}</Index>
            </PinInput.Control>
            <PinInput.HiddenInput />
        </PinInput.Root>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
)
