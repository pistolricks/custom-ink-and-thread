import { Format } from '@ark-ui/solid/format'
import { LocaleProvider } from '@ark-ui/solid/locale'
import { For } from 'solid-js'


export const ByteBasic = () => {
    return (
        <div>
            File size: <Format.Byte value={1450.45} />
        </div>
    )
}

export const ByteSizes = () => {
    const byteSizes = [50, 5000, 5000000, 5000000000]

    return (
        <div>
            <For each={byteSizes}>
                {(size) => (
                    <div>
                        <Format.Byte value={size} />
                    </div>
                )}
            </For>
        </div>
    )
}

export const ByteWithLocale = () => {
    const locales = ['de-DE', 'zh-CN']
    const value = 1450.45

    return (
        <div>
            <For each={locales}>
                {(locale) => (
                    <LocaleProvider locale={locale}>
                        <Format.Byte value={value} />
                    </LocaleProvider>
                )}
            </For>
        </div>
    )
}



export const ByteWithUnit = () => {
    const value = 1450.45
    const unit = 'bit'

    return (
        <div>
            File size: <Format.Byte value={value} unit={unit} />
        </div>
    )
}


export const ByteWithUnitDisplay = () => {
    const value = 50345.53
    const unitDisplays = ['narrow', 'short', 'long'] as const

    return (
        <div>
            <For each={unitDisplays}>{(unitDisplay) => <Format.Byte value={value} unitDisplay={unitDisplay} />}</For>
        </div>
    )
}
