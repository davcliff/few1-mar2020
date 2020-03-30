import { Employee, VacationRequest, DAYS_OF_PTO as pto } from '../src/hr/';

import * as fromHr from '../src/hr';

describe('using classes', () => {
    describe('creating instances', () => {
        it('demo', () => {
            expect(pto).toBe(23);
        });
        it('using constructors', () => {
            const bob = new Employee(64_000, 'Robert', 'Jones');

            expect(bob.getSalary()).toBe(64_000);
            expect(bob.firstName).toBe('Robert');
            expect(bob.lastName).toBe('Jones');

            expect(bob.fullName).toBe('Jones, Robert');

            const sue = new Employee(undefined, 'Sure', 'Smith');
            expect(sue.getSalary()).toBe(50_000);
            expect(sue.firstName).toBe('Sure');
            sue.firstName = 'Susan';
            expect(sue.firstName).toBe('Susan');

            const vacation = new VacationRequest(sue);
            expect(vacation.employee.firstName).toBe('Susan');
        });
    });
});
