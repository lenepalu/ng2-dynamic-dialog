
// Set the default file extension
System.config({

    packages: {
        'src': { defaultExtension: 'js' }
    }
});

// Import our test files
Promise.all([
    System.import('src/ng2-dynamic-dialog/utilities/lerp.spec'),
    System.import('src/ng2-dynamic-dialog/utilities/intervals.spec')
])

// Trigger our test events/**/
    .then(window.onload)
    .catch(console.error.bind(console));
