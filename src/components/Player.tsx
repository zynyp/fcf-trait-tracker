import { createSignal, For } from "solid-js";

import { Checkbox, Counter, Label } from ".";
import type { CardType, Color } from "../types";

const CARD_TYPES: CardType[] = ["IDENTITY", "OCCUPATION", "SKILL", "FAVOURITE_FOOD", "ACCESSORY"];

interface PlayerProps { key: string; }
export default function Player(props: PlayerProps) {
    const { key } = props;

    const [redCount, setRedCount] = createSignal(0);
    const [blueCount, setBlueCount] = createSignal(0);

    function onCheckboxChange(color: Color, prevColor: Color) {
        switch (color) {
            case "RED": {
                setRedCount(redCount() + 1);
                break;
            }

            case "BLUE": {
                setBlueCount(blueCount() + 1);
                break;
            }

            case "NONE":
            default: break;
        }

        switch (prevColor) {
            case "RED": {
                setRedCount(redCount() - 1);
                break;
            }

            case "BLUE": {
                setBlueCount(blueCount() - 1);
                break;
            }

            case "NONE":
            default: break;
        }
    }

    return (
        <>
            <div class="w-full max-w-160">
                <Label key={0} />

                <div class="flex flex-row justify-center pb-2 text-gray-100 dark:text-gray-900 bg-gray-600 dark:bg-gray-200">
                    <For each={CARD_TYPES}>
                        {(type) => <Checkbox id={`${key}-${type}`} cardType={type} onChange={onCheckboxChange} />}
                    </For>
                </div>

                <Counter redCount={redCount} blueCount={blueCount} />
            </div>
        </>
    );
}
