import puppeteer from 'puppeteer';

const main = async () => {
  console.log('Time to get started!');

  try {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://google.com');
      await page.type('input.gLFyf.gsfi', 'lutheran services');
      page.keyboard.press('Enter');
      await page.waitForSelector('div#rso');
      const results = await page.$$eval('cite', (cite) =>
        cite.map((cite) => cite.textContent)
      );
      console.log(results);
      await browser.close();
    })();
  } catch (err) {
    console.error(err);
  }
};

main().catch((err) => console.error(err));
