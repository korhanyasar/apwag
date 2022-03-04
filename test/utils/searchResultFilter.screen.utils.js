class SearchResultFilterScreenUtils {
    get freeShippingSwitch() {
        return $('//*[@text="Ücretsiz Kargo"]');
    }

    get searchFilterListResultsButton() {
        return $('//android.widget.Button[@text="Ürünleri Listele"]');
    }

    

    
    
}

module.exports = new SearchResultFilterScreenUtils();