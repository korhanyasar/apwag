const ProductDetailScreenUtils = require("../utils/productDetail.screen.utils");

class ProductDetailScreen {
    async validateProductDetailScreenOpened() {
        await ProductDetailScreenUtils.productImage.waitForDisplayed({ timeout: 10000 });

        await expect(ProductDetailScreenUtils.productDetailTitle).toBeExisting();
    }

    async selectVariantIfExist() {
        var isVariantExist = await ProductDetailScreenUtils.productDetailVariant.isExisting();
        if (isVariantExist) {
            await ProductDetailScreenUtils.productDetailVariant.click();
        }
    }

    async validateVariantSelected() {
        // Varyant seçildiği kontrol edilir - TODO
        //const variantSelectedText = await ProductDetailScreenUtils.variantSelected.getText();
        //await expect(variantSelectedText).to.not.include('Seçiniz'); // expect eşit değil kullanımı araştırılmalı
    }

    async plusProductCount() {
        await ProductDetailScreenUtils.plusVariantButton.click();
    }

    async validateProductCount() {
        const itemCount = await ProductDetailScreenUtils.itemCount;
        const stockText = await ProductDetailScreenUtils.stockText.getText();
        if (stockText == "Son 1 ürün") {
            await expect(itemCount).toHaveText("1");
        } else {
            await expect(itemCount).toHaveText("2");
        }
    }

    async addBasket() {
        for (let i = 0; i < 8; i++) {
            await driver.sendKeyEvent("20");
        }

        await ProductDetailScreenUtils.addBasketButton.click();        
    }
}

module.exports = new ProductDetailScreen();