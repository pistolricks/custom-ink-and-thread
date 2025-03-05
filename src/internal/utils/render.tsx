import {mergeProps, splitProps} from "solid-js";
import {match} from "./match";

export const RenderFeatures = {
    None: 0,
    RenderStrategy: 1,
    Static: 2,
};

export const RenderStrategy = {
    Unmount: "Unmount",
    Hidden: "Hidden",
};

export function useRender() {
    return (args: {
        ourProps: any;
        theirProps: any;
        slot: any;
        defaultTag: any;
        features: any;
        visible?: boolean;
        name: any;
        static?: boolean
    }) => render(args);
}

function render(props: {
    ourProps: any;
    theirProps: any;
    slot: any;
    defaultTag: any;
    features: any;
    visible?: boolean | undefined;
    name: any;
    static?: boolean;
}) {
    const ourProps = () => props.ourProps;
    const theirProps = () => props.theirProps;
    const slot = () => props.slot;
    const defaultTag = () => props.defaultTag;
    const features = () => props.features;
    const name = () => props.name;
    const visible = () => props.visible;

    const prop = mergePropsAdvanced(theirProps(), ourProps());


    // Visible always renders
    if (visible()) return _render(prop, slot(), defaultTag(), name());

    const featureFlags = features() ?? RenderFeatures.None;

    if (featureFlags & RenderFeatures.Static) {

        const {static: isStatic = false, ...rest} = props;

        // When the `static` prop is passed as `true`, then the user is in control
        if (isStatic) return _render(rest, slot(), defaultTag(), name());
    }

    if (featureFlags & RenderFeatures.RenderStrategy) {
        const {unmount = true, ...rest} = ourProps();
        const strategy = unmount ? RenderStrategy.Unmount : RenderStrategy.Hidden;

        return match(strategy, {
            [RenderStrategy.Unmount]: () => null,
            [RenderStrategy.Hidden]: () =>
                _render(
                    {
                        ...rest,
                        hidden: true,
                        style: {display: "none"},
                    },
                    slot(),
                    defaultTag(),
                    name()
                ),
        });
    }

    // No features enabled, just render
    return _render(props, slot(), defaultTag(), name());
}

function _render(props: Record<string, any>, slot = {}, tag: any, name: string) {
    const [local, rest] = splitProps(props, ["as", "children", "refName", "unmount", "static"]);
    const Component = local.as || tag;

    const resolvedChildren =
        typeof local.children === "function" ? local.children(slot) : local.children;

    const className =
        typeof rest.className === "function" ? rest.className(slot) : rest.className;

    const refProps = props.ref ? {[local.refName || "ref"]: props.ref} : {};

    // Drop `aria-labelledby` if it references the current element
    if (rest["aria-labelledby"] && rest["aria-labelledby"] === rest.id) {
        rest["aria-labelledby"] = undefined;
    }

    const dataAttributes = computedSlotAttributes(slot);

    return (
        <Component {...rest} {...refProps} className={className} {...dataAttributes}>
            {resolvedChildren}
        </Component>
    );
}

// Utility function: Compute slot-related data attributes
function computedSlotAttributes(slot: Record<string, any>) {
    if (!slot) return {};

    let exposeState = false;
    let states = [];
    const attributes: Record<string, any> = {};

    for (const [key, value] of Object.entries(slot)) {
        if (typeof value === "boolean") {
            exposeState = true;
        }

        if (value === true) {
            states.push(key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`));
        }
    }

    if (exposeState) {
        attributes["data-headlessui-state"] = states.join(" ");
    }

    return attributes;
}

// Advanced mergeProps implementation to mimic React's mergeProps behavior
function mergePropsAdvanced(
    defaultProps: Record<string, any>,
    overrideProps: Record<string, any>
) {
    // Solid's mergeProps handles this effectively; customize if needed
    return mergeProps(defaultProps, overrideProps);
}