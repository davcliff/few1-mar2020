export const add = (a: number, b: number) => a + b;

export function formatName(first: string, last: string): { formattedName: string; numberOfLetters: number; } {
    const name = `${last}, ${first}`;
    return {
        formattedName: name,
        numberOfLetters: name.length
    };
}

export function isEven(n: number) {
    return n % 2 === 0;
}
