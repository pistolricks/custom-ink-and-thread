"use client"
import {Button} from "~/components/ui/button"
import {Card} from "~/components/ui/card"
import {Checkbox} from "~/components/ui/checkbox"

import {TextFieldInput, TextFieldLabel} from "~/components/ui/field/text-field"
import {Select, SelectTrigger, SelectValue,} from "~/components/ui/select"
import {Component} from "solid-js";
import {Separator} from "@kobalte/core/separator";
import {StopCircle} from "lucide-solid";

type PROPS = {
    roles?: { value: string; label: string }[]
}

const GeneralDetails: Component<PROPS> = props => {

    const roles = () => props.roles;

    return (
        <>
            <section aria-labelledby="notification-settings">
                <form>
                    <div class="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="notification-settings"
                                class="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                            >
                                Notification settings
                            </h2>
                            <p class="mt-1 text-sm leading-6 text-gray-500">
                                Configure the types of notifications you want to receive.
                            </p>
                        </div>
                        <div class="md:col-span-2">
                            <fieldset>
                                <legend class="text-sm font-medium text-gray-900 dark:text-gray-50">
                                    Team
                                </legend>
                                <p class="mt-1 text-sm leading-6 text-gray-500">
                                    Configure the types of team alerts you want to receive.
                                </p>
                                <ul
                                    role="list"
                                    class="mt-4 divide-y divide-gray-200 dark:divide-gray-800"
                                >
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox
                                            id="team-requests"
                                            name="team-requests"
                                            defaultChecked
                                        />
                                        <TextFieldLabel id="team-requests">Team join requests</TextFieldLabel>
                                    </li>
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox id="team-activity-digest"/>
                                        <TextFieldLabel id="team-activity-digest">
                                            Weekly team activity digest
                                        </TextFieldLabel>
                                    </li>
                                </ul>
                            </fieldset>
                            <fieldset class="mt-6">
                                <legend class="text-sm font-medium text-gray-900 dark:text-gray-50">
                                    Usage
                                </legend>
                                <p class="mt-1 text-sm leading-6 text-gray-500">
                                    Configure the types of usage alerts you want to receive.
                                </p>
                                <ul
                                    role="list"
                                    class="mt-4 divide-y divide-gray-200 dark:divide-gray-800"
                                >
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox id="api-requests" name="api-requests"/>
                                        <TextFieldLabel id="api-requests">API incidents</TextFieldLabel>
                                    </li>
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox
                                            id="workspace-execution"
                                            name="workspace-execution"
                                        />
                                        <TextFieldLabel id="workspace-execution">
                                            Platform incidents
                                        </TextFieldLabel>
                                    </li>
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox
                                            id="query-caching"
                                            name="query-caching"
                                            defaultChecked
                                        />
                                        <TextFieldLabel id="query-caching">
                                            Payment transactions
                                        </TextFieldLabel>
                                    </li>
                                    <li class="flex items-center gap-x-3 py-3">
                                        <Checkbox id="storage" name="storage" defaultChecked/>
                                        <TextFieldLabel id="storage">User behavior</TextFieldLabel>
                                    </li>
                                </ul>
                            </fieldset>
                            <div class="col-span-full mt-6 flex justify-end">
                                <Button type="submit">Save settings</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Separator/>
            <section aria-labelledby="danger-zone">
                <form>
                    <div class="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-3">
                        <div>
                            <h2
                                id="danger-zone"
                                class="scroll-mt-10 font-semibold text-gray-900 dark:text-gray-50"
                            >
                                Danger zone
                            </h2>
                            <p class="mt-1 text-sm leading-6 text-gray-500">
                                Manage general workspace. Contact system admin for more
                                information.{" "}
                                <a
                                    href="#"
                                    class="inline-flex items-center gap-1 text-indigo-600 hover:underline hover:underline-offset-4 dark:text-indigo-400"
                                >
                                    Learn more
                                    <StopCircle
                                        class="size-4 shrink-0"
                                        aria-hidden="true"
                                    />
                                </a>
                            </p>
                        </div>
                        <div class="space-y-6 md:col-span-2">
                            <Card class="p-4">
                                <div class="flex items-start justify-between gap-10">
                                    <div>
                                        <h4 class="text-sm font-medium text-gray-900 dark:text-gray-50">
                                            Leave workspace
                                        </h4>
                                        <p class="mt-2 text-sm leading-6 text-gray-500">
                                            Revoke your access to this team. Other people you have
                                            added to the workspace will remain.
                                        </p>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        class="text-red-600 dark:text-red-500"
                                    >
                                        Leave
                                    </Button>
                                </div>
                            </Card>
                            <Card class="overflow-hidden p-0">
                                <div class="flex items-start justify-between gap-10 p-4">
                                    <div>
                                        <h4 class="text-sm font-medium text-gray-400 dark:text-gray-600">
                                            Delete workspace
                                        </h4>
                                        <p class="mt-2 text-sm leading-6 text-gray-400 dark:text-gray-600">
                                            Revoke your access to this team. Other people you have
                                            added to the workspace will remain.
                                        </p>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        disabled
                                        class="whitespace-nowrap text-red-600 disabled:text-red-300 disabled:opacity-50 dark:text-red-500 disabled:dark:text-red-700"
                                    >
                                        Delete workspace
                                    </Button>
                                </div>
                                <div
                                    class="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-900 dark:bg-gray-900">
                                    <p class="text-sm text-gray-500">
                                        You cannot delete the workspace because you are not the
                                        system admin.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </form>
            </section>

        </>
    )
}
export default GeneralDetails;