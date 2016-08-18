import { Ng2DynamicDialogStyle } from '../../lib/styles/style';

// While there is little gain from testing a POD structure, these tests will force any
// changes to default behaviour to be flagged and fail forcing more thought

// Lerp tests
describe('Ng2DynamicDialogStyle', () => {

    // ----------------------------------------------------------------------
    it('Styles: Behaviour - Default values are as expected', () => {

        let style: Ng2DynamicDialogStyle = new Ng2DynamicDialogStyle();

        expect(style.dialogBackgroundColor).toBe('#ffffff');
        expect(style.dialogBorderColor).toBe('#000000');

        expect(style.dialogFontColor).toBe('#000000');

        expect(style.dialogFontFamily).toBe('"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif');
        expect(style.dialogFontSize).toBe('14');
        expect(style.dialogFontStyle).toBe('normal');

        expect(style.dialogBorderRadius).toBe(15);

        expect(style.buttonBackgroundColor).toBe('#dddddd');
        expect(style.buttonBorderColor).toBe('#000000');
        expect(style.buttonHoverColor).toBe('#ffffff');

        expect(style.buttonFontColor).toBe('#000000');

        expect(style.buttonFontFamily).toBe('"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif');
        expect(style.buttonFontSize).toBe('14');
        expect(style.buttonFontStyle).toBe('normal');

        expect(style.buttonBorderRadius).toBe(5);

        expect(style.titleFontColor).toBe('#000000');

        expect(style.titleFontFamily).toBe('"Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Verdana, sans-serif');
        expect(style.titleFontSize).toBe('20');
        expect(style.titleFontStyle).toBe('normal');

        expect(style.closeButtonImage).toBeNull();

        expect(style.transitionTimeDialogs).toBe(0.3);
        expect(style.transitionTimeContent).toBe(0.3);
    });
});
