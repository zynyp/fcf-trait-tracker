interface CounterProps {
    redCount(): number;
    blueCount(): number;
}

export default function Counter(props: CounterProps) {
    const { redCount, blueCount } = props;

    return (
        <div class="inline-block w-full text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
            <p class="px-2 py-1.5 bg-red-500">Red: <span class="px-1.5 py-0.25 ml-1 font-bold font-['Kalam'] text-gray-100 dark:text-gray-900 text-center align-middle bg-gray-900 dark:bg-gray-100 rounded-lg">{redCount()}</span></p>
            <p class="px-2 py-1.5 bg-blue-500 rounded-b-xl">Blue: <span class="px-1.5 py-0.25 ml-1 font-bold font-['Kalam'] text-gray-100 dark:text-gray-900 text-center align-middle bg-gray-900 dark:bg-gray-100 rounded-lg">{blueCount()}</span></p>
        </div>
    );
}
