import { FileUpload, useFileUpload } from '@ark-ui/solid/file-upload'
import { For } from 'solid-js'
import { Field } from '@ark-ui/solid/field'


export const RootProvider = () => {
    const fileUpload = useFileUpload({ maxFiles: 5 })

    return (
        <>
            <button onClick={() => fileUpload().clearFiles()}>Clear</button>

            <FileUpload.RootProvider value={fileUpload}>
                <FileUpload.Label>File Upload</FileUpload.Label>
                <FileUpload.Dropzone>Drag your file(s)here</FileUpload.Dropzone>
                <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
                <FileUpload.ItemGroup>
                    <FileUpload.Context>
                        {(context) => (
                            <For each={context().acceptedFiles}>
                                {(file) => (
                                    <FileUpload.Item file={file}>
                                        <FileUpload.ItemPreview type="image/*">
                                            <FileUpload.ItemPreviewImage />
                                        </FileUpload.ItemPreview>
                                        <FileUpload.ItemPreview type=".*">Any Icon</FileUpload.ItemPreview>
                                        <FileUpload.ItemName />
                                        <FileUpload.ItemSizeText />
                                        <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                                    </FileUpload.Item>
                                )}
                            </For>
                        )}
                    </FileUpload.Context>
                </FileUpload.ItemGroup>
                <FileUpload.HiddenInput />
            </FileUpload.RootProvider>
        </>
    )
}

export const WithField = (props: Field.RootProps) => (
    <Field.Root {...props}>
        <FileUpload.Root maxFiles={5}>
            <FileUpload.Label>Label</FileUpload.Label>
            <FileUpload.Trigger>Select</FileUpload.Trigger>
            <FileUpload.ItemGroup />
            <FileUpload.HiddenInput data-testid="input" />
        </FileUpload.Root>
        <Field.HelperText>Additional Info</Field.HelperText>
        <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
)



export const FileUploader = () => (
    <FileUpload.Root maxFiles={5}>
        <FileUpload.Label>File Upload</FileUpload.Label>
        <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
        <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
        <FileUpload.ItemGroup>
            <FileUpload.Context>
                {(context) => (
                    <For each={context().acceptedFiles}>
                        {(file) => (
                            <FileUpload.Item file={file}>
                                <FileUpload.ItemPreview type="image/*">
                                    <FileUpload.ItemPreviewImage />
                                </FileUpload.ItemPreview>
                                <FileUpload.ItemPreview type=".*">Any Icon</FileUpload.ItemPreview>
                                <FileUpload.ItemName />
                                <FileUpload.ItemSizeText />
                                <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                            </FileUpload.Item>
                        )}
                    </For>
                )}
            </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
    </FileUpload.Root>
)
