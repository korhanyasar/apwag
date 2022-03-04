class BasketScreenUtils {
    get basketBar() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/fragment_basket_toolbar"]');
    }   
    
    get basketItemCount() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/cell_basket_product_layout_amount"]//*[@class="android.widget.LinearLayout"]//*[@class="android.widget.TextView"]');
    }

    get basketProductRemainingAmount() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/cell_basket_product_textview_remaining_amount"]');
    }
}

module.exports = new BasketScreenUtils();