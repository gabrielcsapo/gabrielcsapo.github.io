const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    var viewports = [
        [320, 480],
        [375, 667],
        [640, 990],
        [720, 562],
        [1024, 768],
        [1920, 1080]
    ];

    for (var i = 0; i <= viewports.length; i++) {
        var width = viewports[i][0];
        var height = viewports[i][1];
        var name = `./screenshots/${width}-${height}.png`;

        await page.property('viewportSize', {
            width: width,
            height: height
        });
        const status = await page.open('http://localhost:5000/');
        console.log(`Page opened with status [${status}].`);
        let response = await page.evaluate(function() {
            console.log(document);
            document.body.bgColor = 'white';
        });

        await page.render(name);
        console.log(`File created at ${name}`);
    }

    await instance.exit(0);
}());
