import { For } from "solid-js";
import { Legend, Player } from "./components";

export default function App() {
    return (
        <>
            <section class="flex flex-col gap-2 items-center px-4 w-full">
                <h2 class="font-bold text-2xl text-center">Legend</h2>
                <Legend />
            </section>

            <section class="flex flex-col gap-6 items-center px-4 w-full">
                <h2 class="font-bold text-2xl">Player Trackers</h2>

                <For each={[...Array(6).keys()]}>
                    {(i) => <Player key={`${i}`} />}
                </For>
            </section>
        </>
    );
}
