import { Ng2DynamicDialogIntervals } from '../../lib/utilities/intervals';

// Lerp tests
describe('Ng2DynamicDialogIntervals', () => {

    // ----------------------------------------------------------------------
    it('Intervals - Interval is not triggered instantly', () => {

        let interval: Ng2DynamicDialogIntervals = new Ng2DynamicDialogIntervals();

        let numberOfTimesCalled = 0;
        interval.trigger(() => {

            ++numberOfTimesCalled;
            return false;
        });

        expect(numberOfTimesCalled).toBe(0);
    });

    // ----------------------------------------------------------------------
    it('Intervals - Interval is triggered after interval', () => {

        let interval: Ng2DynamicDialogIntervals = new Ng2DynamicDialogIntervals();

        // Use our test timer
        jasmine.clock().install();

        // Enable the intervals
        let numberOfTimesCalled = 0;
        interval.trigger(() => {

            ++numberOfTimesCalled;
            return false;
        });

        // Kick off the timer
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 10);

        expect(numberOfTimesCalled).toBe(1);

        // Lose the clock
        jasmine.clock().uninstall();
    });

    // ----------------------------------------------------------------------
    it('Intervals - Interval is triggered multiple times', () => {

        let interval: Ng2DynamicDialogIntervals = new Ng2DynamicDialogIntervals();

        // Use our test timer
        jasmine.clock().install();

        // Enable the intervals
        let numberOfTimesCalled = 0;
        interval.trigger(() => {

            ++numberOfTimesCalled;
            return true;
        });

        // Kick off the timer
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);

        expect(numberOfTimesCalled).toBe(4);

        // Lose the clock
        jasmine.clock().uninstall();
    });

    // ----------------------------------------------------------------------
    it('Intervals - Interval is triggered until cancelled', () => {

        let interval: Ng2DynamicDialogIntervals = new Ng2DynamicDialogIntervals();

        // Use our test timer
        jasmine.clock().install();

        // Enable the intervals
        let numberOfTimesCalled = 0;
        interval.trigger(() => {

            ++numberOfTimesCalled;

            // If we have called it three times, cancel it
            return (numberOfTimesCalled === 3) ? false : true;
        });

        // Kick off the timer
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);
        jasmine.clock().tick(Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL + 1);

        // Only called three times as it's cancelled after the 3rd one
        expect(numberOfTimesCalled).toBe(3);

        // Lose the clock
        jasmine.clock().uninstall();
    });

    // ----------------------------------------------------------------------
    it('Intervals - Interval contains time delta', (done) => {

        let interval: Ng2DynamicDialogIntervals = new Ng2DynamicDialogIntervals();

        // Enable the intervals
        let givenTimeDelta = 0;
        interval.trigger((timeDelta: number) => {

            givenTimeDelta = timeDelta;
            return false;
        });

        // Add a delay so we know the delta should be correct
        setTimeout(function () {

            // Time intervals in JS are quite erratic, but it should be greater than
            try {
                expect(givenTimeDelta >= Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL / 1000).toBeTruthy();
                done();
            } catch (err) {
            }
        }, Ng2DynamicDialogIntervals.DEFAULT_MILLISECOND_INTERVAL);
    });
});
