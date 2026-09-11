import { test, expect, Page } from "@playwright/test";
import { googleSearch } from "../pages/google";

test.describe("Google Search", () => {

    let gSearch: googleSearch;
    test.beforeEach(async ({ page }) => {

        gSearch = new googleSearch(page);
        await page.goto("https://www.google.com/");

    });

    test("Search with valid keyword", async ({ page }) => {

        await gSearch.searchKeyword();
    })
})