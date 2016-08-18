
// Set the default file extension
System.config({

    packages: {
        'src': { defaultExtension: 'js' }
    }
});

// Import our test files
Promise.all([
    System.import('src/tests/utilities/lerp.spec'),
    System.import('src/tests/utilities/intervals.spec')
])
    .then(window.onload)
    .catch(console.error.bind(console));
