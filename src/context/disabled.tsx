import {Accessor, createContext, createSignal, JSXElement, Setter, useContext} from 'solid-js'


type DISABLED_PROPS = {
    getIsDisabled: Accessor<boolean>,
    setIsDisabled: Setter<boolean>,

}
export const DisabledContext = createContext<DISABLED_PROPS>();

export function DisabledProvider(props: DISABLED_PROPS & { children: JSXElement, isDisabled: boolean }) {
    const [getIsDisabled, setIsDisabled] = createSignal(props.isDisabled)

    return (
        <DisabledContext.Provider value={{
            getIsDisabled,
            setIsDisabled
        }}>
            {props.children}
        </DisabledContext.Provider>
    )
}

export function useDisabledContext() {
    return useContext(DisabledContext)!
}