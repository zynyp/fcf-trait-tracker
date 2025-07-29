import { render } from "solid-js/web";
import "./style.css";

import App from "./App";

const root = document.querySelector("main")!;
render(() => <App />, root);
