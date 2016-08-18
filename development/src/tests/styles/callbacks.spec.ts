import { Ng2DynamicDialogCallbacks } from '../../lib/styles/callbacks';

// While there is little gain from testing a POD structure, these tests will force any
// changes to default behaviour to be flagged and fail forcing more thought

// Lerp tests
describe('Ng2DynamicDialogCallbacks', () => {

    // ----------------------------------------------------------------------
    it('Styles: Callbacks - Default values are as expected', () => {

        let callbacks: Ng2DynamicDialogCallbacks = new Ng2DynamicDialogCallbacks();

        expect(callbacks.onButton1Clicked).toBe(null);
        expect(callbacks.onButton2Clicked).toBe(null);
        expect(callbacks.onButton3Clicked).toBe(null);

        expect(callbacks.onButtonExitClicked).toBe(null);

        expect(callbacks.onButtonEnter).toBe(null);
        expect(callbacks.onButtonExit).toBe(null);

        expect(callbacks.onDialogOpening).toBe(null);
        expect(callbacks.onDialogOpened).toBe(null);

        expect(callbacks.onDialogClosing).toBe(null);
        expect(callbacks.onDialogClosed).toBe(null);

        expect(callbacks.onTransitionDimensions).toBe(null);

        expect(callbacks.onTransitionContentHide).toBe(null);
        expect(callbacks.onTransitionContentShow).toBe(null);

    });
});
