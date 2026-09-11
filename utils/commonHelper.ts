import { Locator, Page } from "@playwright/test"

   export async function fillField(value: string, locator:Locator ) 
    {
      await locator.fill(value);
    }

    export async function clickElement(locator:Locator)
    {
      await locator.click();
    }

    export async function waitForElement(locator: Locator, State:any)
    {
      await locator.waitFor({state:State,timeout:10000});
    }

  