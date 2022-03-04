class SearchResultScreenUtils {
    get productCountText() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/productCountText"]');
    }

    get filterSearchResults() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/filterButton"]');
    }

    get firstProduct() {
        return $('//*[@content-desc="Ürün görseli"]');
    }    
    
}

module.exports = new SearchResultScreenUtils();