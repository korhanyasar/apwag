const BasketScreenUtils = require("../utils/basket.screen.utils");

class BasketScreen {
    async validateBasketScreenOpened() {
        await driver.pause(3000);        
        await expect(BasketScreenUtils.basketBar).toBeExisting();        
    }

    async validateBasketProductAmount() {
        const basketItemCount = await BasketScreenUtils.basketItemCount;
        const basketProductRemainingAmount = await BasketScreenUtils.basketProductRemainingAmount.getText();        
        if (basketProductRemainingAmount == "Son 1 ürün") {
            await expect(basketItemCount).toHaveText("1");
        } else {
            await expect(basketItemCount).toHaveText("2");
        }       
    }
}

module.exports = new BasketScreen();