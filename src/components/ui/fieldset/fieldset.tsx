import { Field } from '@ark-ui/solid/field'
import { Fieldset } from '@ark-ui/solid/fieldset'
import { Checkbox } from '@ark-ui/solid/checkbox'

export const WithField = (props: Fieldset.RootProps) => {
    return (
        <Fieldset.Root {...props}>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
            <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
            <Field.Root>
                <Field.Label>Label</Field.Label>
                <Field.Input />
                <Field.HelperText>Field Helper Text</Field.HelperText>
                <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
        </Fieldset.Root>
    )
}



export const WithCheckbox = (props: Fieldset.RootProps) => {
    return (
        <Fieldset.Root {...props}>
            <Fieldset.Legend>Legend</Fieldset.Legend>
            <Fieldset.HelperText>Fieldset Helper Text</Fieldset.HelperText>
            <Fieldset.ErrorText>Fieldset Error Text</Fieldset.ErrorText>
            <Field.Root>
                <Checkbox.Root>
                    <Checkbox.Label>Label</Checkbox.Label>
                    <Checkbox.Control>
                        <Checkbox.Indicator>✔️</Checkbox.Indicator>
                    </Checkbox.Control>
                    <Checkbox.HiddenInput />
                </Checkbox.Root>
                <Field.HelperText>Field Heler Text</Field.HelperText>
                <Field.ErrorText>Field Error Text</Field.ErrorText>
            </Field.Root>
        </Fieldset.Root>
    )
}
