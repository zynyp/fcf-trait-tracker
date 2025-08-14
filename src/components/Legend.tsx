import { For } from "solid-js";

import { Checkbox } from ".";
import { cardTypeNames } from "../data";
import { CARD_TYPES } from "../types";

export default function Legend() {
    return (
        <>
            <dl class="grid grid-cols-3 gap-2">
                <For each={CARD_TYPES}>
                    {(type) => {
                        const name = cardTypeNames[type];
                        const boldedCharIdx = name.indexOf(type[0]);

                        return (
                            <div class="text-center">
                                <dt class="p-2">
                                    <Checkbox id={`legend-${name}`} cardType={type} isClickable={false} showLabel={false} />
                                </dt>

                                <dd>{name.slice(0, boldedCharIdx)}<b>{name[boldedCharIdx]}</b>{name.slice(boldedCharIdx + 1)}</dd>
                            </div>
                        );
                    }}
                </For>
            </dl>
        </>

    )
}
