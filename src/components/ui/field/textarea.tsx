import { Field } from '@ark-ui/solid/field'

export const Textarea = () => {
    return (
        <Field.Root>
            <Field.Label>Label</Field.Label>
            <Field.Textarea />
            <Field.HelperText>Some additional Info</Field.HelperText>
            <Field.ErrorText>Error Info</Field.ErrorText>
        </Field.Root>
    )
}


export const TextareaAutoResize = () => {
    return (
        <Field.Root>
            <Field.Label>Label</Field.Label>
            <Field.Textarea autoresize />
            <Field.HelperText>Some additional Info</Field.HelperText>
            <Field.ErrorText>Error Info</Field.ErrorText>
        </Field.Root>
    )
}
