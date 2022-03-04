class ProductDetailScreenUtils {
    get productImage() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/productImage"]');
    }
    
    get productDetailTitle() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/tv_product_title"]');
    }

    get productDetailVariant() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/product_detail_variant_cell_const_layout"]');
    }

    get variantSelected() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/tv_variant_selected"]');
    }

    get plusVariantButton() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/btnPlusVariant"]');
    }

    get itemCount() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/tv_item_count"]');
    }

    get stockText() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/tv_item_in_stock_text"]');
    }

    get addBasketButton() {
        return $('//*[@text="Sepete Ekle"]');
    }
}

module.exports = new ProductDetailScreenUtils();