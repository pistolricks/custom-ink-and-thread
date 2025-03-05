import { QrCode, useQrCode } from '@ark-ui/solid/qr-code'
import {Component} from "solid-js";

export const RootProvider = () => {
    const qrCode = useQrCode({ defaultValue: 'http://ark-ui.com' })

    return (
        <>
            <button onClick={() => qrCode().setValue('https://ark-ui().com')}>Set Value</button>

            <QrCode.RootProvider value={qrCode}>
                <QrCode.Frame>
                    <QrCode.Pattern />
                </QrCode.Frame>
            </QrCode.RootProvider>
        </>
    )
}




export const Basic = () => {
    return (
        <QrCode.Root value="http://ark-ui.com">
            <QrCode.Frame>
                <QrCode.Pattern />
            </QrCode.Frame>
            <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
                Download
            </QrCode.DownloadTrigger>
        </QrCode.Root>
    )
}


export const Download: Component<{}> = props => {

    return (
        <QrCode.DownloadTrigger fileName="qr-code.png" mimeType="image/png">
            Download
        </QrCode.DownloadTrigger>
    );
};

export const WithOverlay = () => {
    return (
        <QrCode.Root defaultValue="http://ark-ui.com">
            <QrCode.Frame>
                <QrCode.Pattern />
            </QrCode.Frame>
            <QrCode.Overlay>
                <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
            </QrCode.Overlay>
        </QrCode.Root>
    )
}


export const ErrorCorrection = () => {
    return (
        <QrCode.Root defaultValue="http://ark-ui.com" encoding={{ ecc: 'H' }}>
            <QrCode.Frame>
                <QrCode.Pattern />
            </QrCode.Frame>
        </QrCode.Root>
    )
}