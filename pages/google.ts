import { Locator, Page } from "@playwright/test";
import * as commonHelper from "../utils/commonHelper";
import search from "../test-data/search.json"

export class googleSearch{

    readonly searchBox: Locator;
    readonly page:Page;
    readonly formAction: Locator;

    constructor(page:Page) 
    {
       this.page = page;
       this.formAction = page.getByRole("form");
       this.searchBox = page.getByRole("combobox",{name:"Search"});

    }

    async searchKeyword()
    {
       await commonHelper.clickElement(this.searchBox);
       await commonHelper.waitForElement(this.searchBox,"visible");
       await commonHelper.fillField(search.Keyword, this.searchBox);
        await commonHelper.clickElement(this.searchBox);
    }
}