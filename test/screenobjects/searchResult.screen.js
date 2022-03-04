const SearchResultScreenUtils = require("../utils/searchResult.screen.utils");

class SearchResultScreen {
    async validateSearchResultSearched() {
        await expect(SearchResultScreenUtils.productCountText).toHaveTextContaining('adet ürün bulundu');        
    }

    async filterSearchResults() {
        await SearchResultScreenUtils.filterSearchResults.click();        
    }

    async validateSearchFilterListResultsFiltered() {
        await expect(SearchResultScreenUtils.filterSearchResults).toHaveText("Filtrele(2)");        
    }

    async selectFirstProduct() {
        await SearchResultScreenUtils.firstProduct.click();        
    }
}

module.exports = new SearchResultScreen();