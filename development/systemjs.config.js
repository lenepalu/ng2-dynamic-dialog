System.config({

    packages: {
        'src': { defaultExtension: 'js' }
    }
});

// #3. Import the spec file explicitly
System.import('src/ng2-dynamic-dialog/utilities/lerp.spec')

    .then(window.onload)
    .catch(console.error.bind(console));
