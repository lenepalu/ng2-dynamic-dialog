import { SafeHtml } from '@angular/platform-browser';

//
// Requested content for a dialog
//
export class Ng2DynamicDialogContent {

    // Common content
    title: string = null;

    button1: string = null;    // Left most button
    button2: string = null;    // Right most button

    button3: string = null;    // Single button, across the whole dialog

    // Dimensions
    width: number = 0;
    height: number = 0;

    // Custom HTML content
    safeHtmlContent: SafeHtml = null;
    unsafeHtmlContent: string = null;

    // Custom component content
    componentContent: any = null;
}
