describe('declaring variables in typescript', () => {
    describe('typing', () => {
        it('implicity typed variables', () => {
            let name = 'Joe';
            name = 'Ray';

            const age = 50;
        });
        it('explicitly typed variables', () => {
            let name: string;

            name = 'Sue';
        });
        it('union types', () => {
            let thingy: string | number | string[];

            thingy = 'Enchiladas';

            thingy = 42;

            thingy = ['Tacos', 'Enchiladas'];
        });
        it('type aliases', () => {
            type ThingWithLettersAndStuff = string;

            const name: ThingWithLettersAndStuff = 'Joe';

            type MathOperation = (a: number, b: number) => number;
            const add: MathOperation = (a, b) => a + b;
            expect(add(2, 2)).toBe(4);

            const subtract: MathOperation = (a, b) => a - b;
        });
    });
});
