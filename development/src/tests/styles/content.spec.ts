import { Ng2DynamicDialogContent } from '../../lib/styles/content';

// While there is little gain from testing a POD structure, these tests will force any
// changes to default behaviour to be flagged and fail forcing more thought

// Lerp tests
describe('Ng2DynamicDialogContent', () => {

    // ----------------------------------------------------------------------
    it('Styles: Content - Default values are as expected', () => {

        let content: Ng2DynamicDialogContent = new Ng2DynamicDialogContent();

        expect(content.title).toBeNull();

        expect(content.button1).toBeNull();
        expect(content.button2).toBeNull();

        expect(content.button3).toBeNull();

        expect(content.width).toBe(0);
        expect(content.height).toBe(0);

        expect(content.safeHtmlContent).toBeNull();
        expect(content.unsafeHtmlContent).toBeNull();

        expect(content.componentContent).toBeNull();
    });
});
