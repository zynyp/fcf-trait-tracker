import { createMemo, createSignal, Show } from "solid-js";

import { cardTypeNames } from "../data";
import type { Color, CardType } from "../types";

interface CheckboxProps {
    id: string;
    cardType: CardType,

    isClickable?: boolean;
    showLabel?: boolean;

    onChange?(color: Color, prevColor: Color): any;
}

export default function Checkbox(props: CheckboxProps) {
    const {
        id,
        cardType,

        isClickable = true,
        showLabel = true,

        onChange = () => {}
    } = props;

    const labelId = createMemo(() => `label-${id}`);

    const [color, setColor] = createSignal<Color>("NONE");
    const colorName = createMemo(() => {
        switch (color()) {
            case "RED": return "Red";
            case "BLUE": return "Blue";

            case "NONE": return "None";

            default: return "Undefined"
        }
    });

    const colorCSSClass = createMemo(() => {
        switch (color()) {
            case "RED": return "bg-red-400 border-red-500";
            case "BLUE": return "bg-blue-400 border-blue-500";

            case "NONE":
            default: return "bg-gray-400 border-gray-500";
        }
    });

    const cardTypeName = cardTypeNames[cardType];

    function onClick() {
        const prevColor = color();
        let newColor: Color;

        switch (color()) {
            case "RED": {
                newColor = "BLUE";
                break;
            }

            case "BLUE": {
                newColor = "NONE";
                break;
            }

            case "NONE":
            default: {
                newColor = "RED";
                break;
            }
        }

        setColor(newColor);
        onChange(newColor, prevColor);
    }

    return (
        <div class="inline-block px-1 md:px-2" onClick={isClickable ? onClick : () => {}}>
            <Show when={showLabel}>
                <p id={labelId()} class="block my-1 text-sm font-medium text-center select-none">{colorName()}</p>
            </Show>

            <p class={`w-9 h-9 font-bold text-center text-gray-100 rounded-lg border-4 transition-[background-color,_border-color] appearance-none select-none ${colorCSSClass()}`} title={`${cardTypeName} Checkbox`} tabindex={0} role="checkbox" aria-checked={color() !== "NONE"} aria-labelledby={labelId()} onKeyDown={({ code, target }) => code === "Enter" && (target as HTMLInputElement).click()}>{cardType[0]}</p>
        </div>
    );
}
