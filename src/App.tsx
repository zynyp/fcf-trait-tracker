import { For } from "solid-js";
import { Player } from "./components";

export default function App() {
    return (
        <For each={[...Array(6).keys()]}>
            {(i) => <Player key={`${i}`} />}
        </For>
    );
}
