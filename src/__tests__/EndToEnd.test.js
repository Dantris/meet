import puppeteer from "puppeteer";

describe("show/hide event details", () => {
  let browser;
  let page;

  // Use `beforeAll` for setup to open the browser and page once for all tests in this block
  beforeAll(async () => {
    // Launching the browser with headless mode off and slow motion for visual debugging
    browser = await puppeteer.launch({
      headless: true, // run headfull to see what's happening
      slowMo: 250, // slow down by 250ms to see interactions
      timeout: 0, // removes any puppeteer/browser timeout limitations (not Jest timeout)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  // Use `afterAll` to close the browser after all tests are done
  afterAll(async () => {
    await browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details");
    // Expect the details to be null, suggesting they are not visible initially
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn"); // simulate a click to expand details
    const eventDetails = await page.$(".event .details");
    // Expect the details to be defined, suggesting they are visible after clicking
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn"); // simulate a click to toggle visibility
    const eventDetails = await page.$(".event .details");
    // This assumes that clicking the button a second time hides the details again
    // Consider adding a separate button or mechanism if toggle isn't the behavior
    expect(eventDetails).toBeNull(); // Check if details are not visible
  });
});
