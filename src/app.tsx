import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import "./app.css";
import Header from "~/components/layouts/partials/header";
import {Toaster} from "~/components/ui/toast";
import AppLayout from "~/components/layouts/app-layout";


export default function App() {


    return (
        <Router
            root={props => (
                <>

                    <AppLayout>
                        <Header/>
                        <Suspense>{props.children}</Suspense>
                    </AppLayout>

                </>
            )}
        >
            <Toaster/>
            <FileRoutes/>
        </Router>
    );
}
