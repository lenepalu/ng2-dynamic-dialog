import { Ng2DynamicDialogLerp } from './lerp';

// Define some default objects
let StartValue1 = 0;
let EndValue1 = 100;

let StartValue2 = 10;
let EndValue2 = 30;

let Duration = 10;

let lerp: Ng2DynamicDialogLerp = new Ng2DynamicDialogLerp();

// Lerp tests
describe('Ng2DynamicDialogLerp', () => {

    // ----------------------------------------------------------------------
    it('Single Lerps - Result contains number and result', () => {

        lerp.setSingleLerp(StartValue1, EndValue1, Duration);
        let result: (number | boolean)[] = lerp.lerp(0);

        expect(result[0]).toEqual(jasmine.any(Number));
        expect(result[1]).toEqual(jasmine.any(Boolean));
    });

    // ----------------------------------------------------------------------
    it('Single Lerps - Starts at beginning', () => {

        lerp.setSingleLerp(StartValue1, EndValue1, Duration);

        let timeDelta = 0;
        let result: (number | boolean)[] = lerp.lerp(timeDelta);

        expect(result[0]).toBe(StartValue1);
    });

    // ----------------------------------------------------------------------
    it('Single Lerps - Finishes at end', () => {

        lerp.setSingleLerp(StartValue1, EndValue1, Duration);

        let timeDelta = Duration;
        let result: (number | boolean)[] = lerp.lerp(timeDelta);

        expect(result[0]).toBe(EndValue1);
    });

    // ----------------------------------------------------------------------
    it('Single Lerps - Lerps increase', () => {

        lerp.setSingleLerp(StartValue1, EndValue1, Duration);

        // We need to track our lerping values
        let previousLerpValue = 0 - 1;

        // Spin through and check the lerp constantly grows
        let interval = 5;
        let currentLength = 0;
        while (currentLength <= Duration) {

            let result: (number | boolean)[] = lerp.lerp(currentLength);
            expect(result[0]).toBeGreaterThan(previousLerpValue);

            // Next interval
            previousLerpValue = <number>result[0];
            currentLength += interval;
        }
    });

    // ----------------------------------------------------------------------
    it('Single Lerps - Flagged as finished', () => {

        lerp.setSingleLerp(StartValue1, EndValue1, Duration);

        let result1: (number | boolean)[] = lerp.lerp(0);
        expect(result1[1]).not.toBe(true);

        let result2: (number | boolean)[] = lerp.lerp(Duration);
        expect(result2[1]).toBe(true);

    });



    // ----------------------------------------------------------------------
    it('Multiple Lerps - Result contains numbers and result', () => {

        lerp.setMultipleLerp([[StartValue1, EndValue1], [StartValue2, EndValue2]], Duration);
        let result: (number | boolean)[] = lerp.lerp(0);

        expect(result[0]).toEqual(jasmine.any(Number));
        expect(result[1]).toEqual(jasmine.any(Number));

        expect(result[2]).toEqual(jasmine.any(Boolean));
    });

    // ----------------------------------------------------------------------
    it('Multiple Lerps - Starts at beginning', () => {

        lerp.setMultipleLerp([[StartValue1, EndValue1], [StartValue2, EndValue2]], Duration);

        let timeDelta = 0;
        let result: (number | boolean)[] = lerp.lerp(timeDelta);

        expect(result[0]).toBe(StartValue1);
        expect(result[1]).toBe(StartValue2);
    });

    // ----------------------------------------------------------------------
    it('Multiple Lerps - Finishes at end', () => {

        lerp.setMultipleLerp([[StartValue1, EndValue1], [StartValue2, EndValue2]], Duration);

        let timeDelta = Duration;
        let result: (number | boolean)[] = lerp.lerp(timeDelta);

        expect(result[0]).toBe(EndValue1);
        expect(result[1]).toBe(EndValue2);
    });

    // ----------------------------------------------------------------------
    it('Multiple Lerps - Lerps increase', () => {

        lerp.setMultipleLerp([[StartValue1, EndValue1], [StartValue2, EndValue2]], Duration);

        // We need to track our lerping values
        let previousLerpValue: number[] = [0 - 1, 0 - 1];

        // Spin through and check the lerp constantly grows
        let interval = 5;
        let currentLength = 0;
        while (currentLength <= Duration) {

            let result: (number | boolean)[] = lerp.lerp(currentLength);

            expect(result[0]).toBeGreaterThan(previousLerpValue[0]);
            expect(result[1]).toBeGreaterThan(previousLerpValue[1]);

            // Next interval
            previousLerpValue[0] = <number>result[0];
            previousLerpValue[1] = <number>result[1];

            currentLength += interval;
        }
    });

    // ----------------------------------------------------------------------
    it('Multiple Lerps - Flagged as finished', () => {

        lerp.setMultipleLerp([[StartValue1, EndValue1], [StartValue2, EndValue2]], Duration);

        let result1: (number | boolean)[] = lerp.lerp(0);
        expect(result1[2]).not.toBe(true);

        let result2: (number | boolean)[] = lerp.lerp(Duration);
        expect(result2[2]).toBe(true);

    });

});
