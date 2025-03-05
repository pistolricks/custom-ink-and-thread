import { Editable } from '@ark-ui/solid/editable'
import { Field } from '@ark-ui/solid/field'
import {Component, Show} from "solid-js";
export const RootProvider = () => {
    const editable = useEditable({ placeholder: 'Placeholder' })

    return (
        <>
            <button onClick={() => editable().edit()}>Edit</button>

            <Editable.RootProvider value={editable}>
                <Editable.Label>Label</Editable.Label>
                <Editable.Area>
                    <Editable.Input />
                    <Editable.Preview />
                </Editable.Area>
            </Editable.RootProvider>
        </>
    )
}




export const Basic = () => (
    <Editable.Root placeholder="Placeholder">
        <Editable.Label>Label</Editable.Label>
        <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
        </Editable.Area>
    </Editable.Root>
)


export const CustomControls = () => (
    <Editable.Root placeholder="enter a value" value="Chakra">
        <Editable.Label>Label</Editable.Label>
        <Editable.Area>
            <Editable.Input />
            <Editable.Preview />
        </Editable.Area>
        <Editable.Context>
            {(editable) => (
                <Editable.Control>
                    <Show when={editable().editing} fallback={<Editable.EditTrigger>Edit</Editable.EditTrigger>}>
                        <Editable.SubmitTrigger>Save</Editable.SubmitTrigger>
                        <Editable.CancelTrigger>Canvel</Editable.CancelTrigger>
                    </Show>
                </Editable.Control>
            )}
        </Editable.Context>
    </Editable.Root>
)


export const WithField = (props: Field.RootProps) => (
    <Field.Root {...props} readOnly>
        <Editable.Root placeholder="Placeholder" activationMode="dblclick">
            <Editable.Label>Label</Editable.Label>
            <Editable.Area>
                <Editable.Input />
                <Editable.Preview />
            </Editable.Area>
        </Editable.Root>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
)

const Settings: Component<{}> = props => {

    return (
        <>
            <Editable.Root placeholder="Placeholder" autoResize>
                {/*...*/}
            </Editable.Root>

            <Editable.Root placeholder="Placeholder" autoResize maxWidth="320px">
                {/*...*/}
            </Editable.Root>

            <Editable.Root placeholder="Placeholder" activationMode="dblclick">
                {/*...*/}
            </Editable.Root>
        </>
    );
};