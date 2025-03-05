import { NumberInput, useNumberInput } from '@ark-ui/solid/number-input'
import { Field } from '@ark-ui/solid/field'

export const RootProvider = () => {
    const numberInput = useNumberInput()

    return (
        <>
            <button onClick={() => numberInput().focus()}>Focus</button>

            <NumberInput.RootProvider value={numberInput}>
                <NumberInput.Label>Label</NumberInput.Label>
                <NumberInput.Input />
                <NumberInput.Control>
                    <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
                    <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
                </NumberInput.Control>
            </NumberInput.RootProvider>
        </>
    )
}




export const WithField = (props: Field.RootProps) => (
    <Field.Root {...props}>
        <NumberInput.Root>
            <NumberInput.Label>Label</NumberInput.Label>
            <NumberInput.Input />
            <NumberInput.Control>
                <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
                <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
            </NumberInput.Control>
        </NumberInput.Root>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
)



export const Formatted = () => (
    <NumberInput.Root
        formatOptions={{
            style: 'currency',
            currency: 'USD',
        }}
    >
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const FormUsage = () => (
    <NumberInput.Root name="quantity">
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const NoClamp = () => (
    <NumberInput.Root clampValueOnBlur={false}>
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const MouseWheel = () => (
    <NumberInput.Root allowMouseWheel>
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const Scrubber = () => (
    <NumberInput.Root>
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const FractionDigits = () => (
    <NumberInput.Root formatOptions={{ minimumFractionDigits: 2, maximumFractionDigits: 4 }} value="1.00">
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const MinMax = () => (
    <NumberInput.Root min={0} max={10}>
        <NumberInput.Scrubber />
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)



export const Basic = () => (
    <NumberInput.Root>
        <NumberInput.Label>Label</NumberInput.Label>
        <NumberInput.Input />
        <NumberInput.Control>
            <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
            <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
        </NumberInput.Control>
    </NumberInput.Root>
)
