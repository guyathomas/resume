const puppeteer = require("puppeteer");
const fs = require("fs");

const printHTML = async function() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto( `file:${__dirname}/public/index.html`);
  const pdf = await page.pdf({ format: "A4", pageRanges: '1' });
  fs.writeFileSync('./public/assets/downloads/guy-thomas-resume-auto.pdf', pdf, 'binary' );
  await browser.close();
};

printHTML();
