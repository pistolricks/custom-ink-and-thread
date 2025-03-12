import {Component, createEffect} from "solid-js";
import {SessionUser} from "~/lib/session";
import {Avatar} from "~/components/ui/avatar/avatar-ui";
import {IconCircle} from "~/components/ui/svg";
import {VENDOR} from "~/lib/store";
import OrderHistory from "~/components/orders/partials/order-history";

type PROPS = {
    user: SessionUser,
    vendor?: VENDOR
}

const UserProfile: Component<PROPS> = props => {

    const user = () => props.user;
    const src = () => undefined;
    const coverSrc = () => "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

    createEffect(() => {
        console.log("profile", user())
    })

    return (
        <div
            class={`grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out ${
                'translate-x-0'
            }`}
        >
            {/* Profile background */}
            <div class="relative h-56 bg-gray-200 dark:bg-gray-900">
                <img class="object-cover h-full w-full" src={coverSrc()} width="979" height="220"
                     alt="Profile background"/>
            </div>

            {/* Content */}
            <div class="relative px-4 sm:px-6 pb-8">
                {/* Pre-header */}
                <div class="-mt-16 mb-6 sm:mb-3">
                    <div class="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
                        {/* Avatar */}
                        <div class="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
                            <Avatar name={user()?.name} src={src()}
                                    class={'rounded-full bg-gray-3 size-24 ring-2 ring-white lg:size-32 bg-accent/20'}/>
                        </div>


                    </div>
                </div>

                {/* Header */}
                <div class="text-center sm:text-left mb-6">
                    {/* Name */}
                    <div class="inline-flex items-start mb-2">
                        <h1 class="text-2xl text-gray-800 dark:text-gray-100 font-bold">
                            {user()?.name}
                        </h1>
                    </div>
                    {/* Bio */}
                    <div class="text-sm mb-3">
                        {user()?.display_name}
                    </div>
                    {/* Meta */}
                    <div class="flex flex-wrap justify-center sm:justify-start space-x-4">
                        <div class="flex items-center">
                            <svg class="fill-current shrink-0 text-gray-400 dark:text-gray-500" width="16" height="16"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z"/>
                            </svg>
                            <span class="text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">
                                Los Angeles, CA
                            </span>
                        </div>
                        <div class="flex items-center">
                            <svg class="fill-current shrink-0 text-gray-400 dark:text-gray-500" width="16" height="16"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z"/>
                            </svg>
                            <div class="text-sm font-medium whitespace-nowrap text-accent/75 hover:text-accent/50 dark:hover:text-accent/25 ml-2"
                               >
                                {user()?.email ?? ""}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Profile content */}
                <div class="flex flex-col xl:flex-row xl:space-x-16">
                    {/* Main content */}
                    <div class="flex-1 space-y-5 mb-8 xl:mb-0">
                        {/* About Me */}
                        <div>
                            <h2 class="text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                About Me
                            </h2>
                            <div class="text-sm space-y-2">
                                <p>

                                </p>
                            </div>
                        </div>

                        {/* Departments */}
                        <div>
                            <h2 class="text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                Company
                            </h2>
                            {/* Cards */}
                            <div class="grid xl:grid-cols-2 gap-4">
                                {/* Card */}
                                {/* Card */}
                                <div
                                    class="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs">
                                    {/* Card header */}
                                    <div class="grow flex items-center truncate mb-2">
                                        <div class="grow flex items-center truncate mb-2">
                                            <IconCircle
                                                class={'w-8 h-8 shrink-0 flex items-center justify-center bg-gray-700 rounded-full mr-2'}/>
                                            <div class="truncate">
                                                <span class="text-sm font-medium text-gray-800 dark:text-gray-100">
                                                    Ollivr, Inc.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card content */}
                                    <div class="text-sm mb-3">
                                        Marketing and advertising systems.
                                    </div>
                                    {/* Card footer */}
                                </div>
                            </div>
                        </div>

                        {/* Work History */}
                        <div>
                            <h2 class="text-gray-800 dark:text-gray-100 font-semibold mb-2">
                                Order History
                            </h2>
                            <div
                                class="bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-xs">

                                <ul class="space-y-3">
                                   <OrderHistory order={''} />
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default UserProfile;