import { chromium } from "@playwright/test";

(async () => {
	// Make sure to run headed.
	const browser = await chromium.launch({ headless: false });

	// Setup context however you like.
	const context = await browser.newContext({
		/* pass any options */
		baseURL: "http://127.0.0.1:3000",

		httpCredentials: {
			username: "watashi",
			password: "anata",
		},
	});
	await context.route("**/*", (route) => route.continue());

	// Pause the page, and start recording manually.
	const page = await context.newPage();

	await page.goto("");

	await page.pause();
})();
