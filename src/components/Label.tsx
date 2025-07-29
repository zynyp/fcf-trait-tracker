import { createMemo } from "solid-js";

interface LabelProps { key: number; }
export default function Label(props: LabelProps) {
    const { key } = props;
    const id = createMemo(() => `name-${key}`);

    return (
        <div class="pt-1 text-center text-gray-100 dark:text-gray-900 bg-gray-600 dark:bg-gray-200 rounded-t-2xl">
            <label class="font-medium" for={id()}>Name: </label>
            <input id={id()} class="ml-2 my-1 w-30 font-bold font-['Kalam'] border-b-gray-100 dark:border-gray-900 border-b-2" spellcheck={false} />
        </div>
    );
}
