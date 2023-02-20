import chalk from 'chalk';
import playwright from 'playwright';

(async () => {
  console.log(chalk.greenBright('[+]'), chalk.yellow('Starting browser...'));
  const browser = await playwright.chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
})();
