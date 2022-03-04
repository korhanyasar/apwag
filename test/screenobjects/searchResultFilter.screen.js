const SearchResultFilterScreenUtils = require("../utils/searchResultFilter.screen.utils");

class SearchResultFilterScreen {
    async switchFreeShipping() {
        await SearchResultFilterScreenUtils.freeShippingSwitch.click();
    }

    async searchFilterListResults() {
        await SearchResultFilterScreenUtils.searchFilterListResultsButton.click();
        await driver.pause(2000);
    }
}

module.exports = new SearchResultFilterScreen();