class BottomTabScreenUtils {
    get tabNotificationCountText() {
        return $('//android.widget.TextView[@content-desc="1ürün"]');
    }   
    
    get tabNameBasket() {
        return $('//*[@text="Sepetim"]');
    }
}

module.exports = new BottomTabScreenUtils();