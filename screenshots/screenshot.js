const puppeteer = require('puppeteer');

const viewports = [
    [320, 480],
    [375, 667],
    [640, 990],
    [720, 562],
    [1024, 768],
    [1920, 1080]
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/');

  for (var i = 0; i <= viewports.length - 1; i++) {
    var width = viewports[i][0];
    var height = viewports[i][1];
    var path = `./screenshots/main/${width}-${height}.png`;

    page.setViewport({ width, height });

    await page.screenshot({ path });
  }

  await page.goto('http://localhost:5000/#/projects');

  for (var i = 0; i <= viewports.length - 1; i++) {
    var width = viewports[i][0];
    var height = viewports[i][1];
    var path = `./screenshots/projects/${width}-${height}.png`;

    page.setViewport({ width, height });

    await page.screenshot({ path });
  }

  await browser.close();
})();
