import { Ng2DynamicDialogBehaviour } from '../../lib/styles/behaviour';

// While there is little gain from testing a POD structure, these tests will force any
// changes to default behaviour to be flagged and fail forcing more thought

// Lerp tests
describe('Ng2DynamicDialogBehaviour', () => {

    // ----------------------------------------------------------------------
    it('Styles: Behaviour - Default values are as expected', () => {

        let behaviour: Ng2DynamicDialogBehaviour = new Ng2DynamicDialogBehaviour();
        expect(behaviour.exitOnOffDialogClick).toBe(true);

    });
});
