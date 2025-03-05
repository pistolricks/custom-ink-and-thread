import { Field } from '@ark-ui/solid/field'
import { createSignal } from 'solid-js'
import { SignaturePad } from '@ark-ui/solid/signature-pad'

export const RootProvider = () => {
    const signaturePad = useSignaturePad()

    return (
        <>
            <button onClick={() => signaturePad().clear()}>Clear</button>

            <SignaturePad.RootProvider value={signaturePad}>
                <SignaturePad.Label>Sign below</SignaturePad.Label>
                <SignaturePad.Control>
                    <SignaturePad.Segment />
                    <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
                    <SignaturePad.Guide />
                </SignaturePad.Control>
            </SignaturePad.RootProvider>
        </>
    )
}



export const WithField = (props: Field.RootProps) => {
    const [value, setValue] = createSignal('')

    return (
        <Field.Root {...props}>
            <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl('image/png').then((url) => setValue(url))}>
                <SignaturePad.Label>Label</SignaturePad.Label>
                <SignaturePad.Control>
                    <SignaturePad.Segment />
                    <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
                    <SignaturePad.Guide />
                </SignaturePad.Control>
                <SignaturePad.HiddenInput value={value()} />
            </SignaturePad.Root>
            <Field.HelperText>Additional Info</Field.HelperText>
            <Field.ErrorText>Error Info</Field.ErrorText>
        </Field.Root>
    )
}




export const ImagePreview = () => {
    const [imageUrl, setImageUrl] = createSignal<string>()

    return (
        <>
            <SignaturePad.Root onDrawEnd={(details) => details.getDataUrl('image/png').then((url) => setImageUrl(url))}>
                <SignaturePad.Label>Sign below</SignaturePad.Label>
                <SignaturePad.Control>
                    <SignaturePad.Segment fill="orange" />
                    <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
                    <SignaturePad.Guide />
                </SignaturePad.Control>
            </SignaturePad.Root>
            <Show when={imageUrl()}>
                <img src={imageUrl()} alt="Signature" />
            </Show>
        </>
    )
}



export const Basic = () => (
    <SignaturePad.Root>
        <SignaturePad.Label>Sign below</SignaturePad.Label>
        <SignaturePad.Control>
            <SignaturePad.Segment />
            <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
            <SignaturePad.Guide />
        </SignaturePad.Control>
    </SignaturePad.Root>
)
