const BasketScreen = require("../screenobjects/basket.screen");
const BottomTabScreen = require("../screenobjects/bottomTab.screen");
const HomeScreen = require("../screenobjects/home.screen");
const ProductDetailScreen = require("../screenobjects/productDetail.screen");
const SearchResultScreen = require("../screenobjects/searchResult.screen");
const SearchResultFilterScreen = require("../screenobjects/searchResultFilter.screen");

describe('İstenen ürünün araılıp sepete eklenmesi ve sepette görüntülenmesi', () => {  
    it('case1', async () => {

        //uygulama ana sayfası açıldı mı kontrol edilir
        await HomeScreen.validateHomeScreenOpened();

        //arama satırına iphone yazılır ve arama işlemi yapılır
        await HomeScreen.searchProduct();        

        //arama işlemi yapıldı mı kontrol edilir
        await SearchResultScreen.validateSearchResultSearched();

        // Filtrele butonuna basılır
        await SearchResultScreen.filterSearchResults();        

        // Ücretsiz Kargo seçeneği seçilir
        await SearchResultFilterScreen.switchFreeShipping();        

        // Ürünleri Listele butonuna basılır
        await SearchResultFilterScreen.searchFilterListResults();        

        //filtre işlemi yapıldı mı kontrol edilir
        await SearchResultScreen.validateSearchFilterListResultsFiltered();

        // İlk ürün detayı açılır
        await SearchResultScreen.selectFirstProduct();        

        // Ürün detay sayfası açıldığı kontrol edilir
        await ProductDetailScreen.validateProductDetailScreenOpened();

        // Eğer varsa ilk varyant seçilir
        await ProductDetailScreen.selectVariantIfExist();        

        // Ürün adedi 1 arttırılır
        await ProductDetailScreen.plusProductCount();        

        // Ürün miktarı 1 arttığı kontrol edilir
        await ProductDetailScreen.validateProductCount();        

        // Ürün sepete eklenir
        await ProductDetailScreen.addBasket();        

        // Ürünün Sepete eklendiği kontrol edilir
        await BottomTabScreen.validateTabNotificationCount();        

        // Sepete gidilir
        await BottomTabScreen.goToBasket();        

        //Sepete gidildiği kontrol edilir
        await BasketScreen.validateBasketScreenOpened();        

        // Sepette ürün sayısı kontrol edilir
        await BasketScreen.validateBasketProductAmount();       

    })

});