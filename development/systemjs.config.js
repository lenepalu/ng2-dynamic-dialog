
// Set the default file extension
System.config({

    packages: {
        'src': { defaultExtension: 'js' }
    }
});

// Import our test files
Promise.all([
    System.import('src/tests/utilities/lerp.spec'),
    System.import('src/tests/utilities/intervals.spec'),

    System.import('src/tests/styles/behaviour.spec'),
    System.import('src/tests/styles/callbacks.spec'),
    System.import('src/tests/styles/content.spec'),
    System.import('src/tests/styles/styles.spec')
])
    .then(window.onload)
    .catch(console.error.bind(console));
