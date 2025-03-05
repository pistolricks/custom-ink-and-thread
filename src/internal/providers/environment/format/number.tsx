import { Format } from '@ark-ui/solid/format'
import { LocaleProvider } from '@ark-ui/solid/locale'

export const NumberBasic = () => {
    return <Format.Number value={1450.45} />
}


export const NumberWithPercentage = () => {
    return <Format.Number value={0.145} style="percent" maximumFractionDigits={2} minimumFractionDigits={2} />
}

export const NumberWithCurrency = () => {
    return <Format.Number value={1234.45} style="currency" currency="USD" />
}



export const NumberWithLocale = () => {
    return (
        <LocaleProvider locale="de-DE">
            <Format.Number value={1450.45} />
        </LocaleProvider>
    )
}



export const NumberWithUnit = () => {
    return <Format.Number value={384.4} style="unit" unit="kilometer" />
}



export const NumberWithCompact = () => {
    return <Format.Number value={1500000} notation="compact" compactDisplay="short" />
}
