import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "~/components/layouts/partials/nav";
import Header from "~/components/layouts/partials/header";

export default function App() {
  return (
    <Router
      root={props => (
        <>
            <Header/>

          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
