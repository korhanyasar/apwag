const BottomTabScreenUtils = require("../utils/bottomTab.screen.utils");

class BottomTabScreen {
    async validateTabNotificationCount() {        
        await driver.pause(3000);
        await expect(BottomTabScreenUtils.tabNotificationCountText).toBeExisting();        
    }

    async goToBasket() {
        await BottomTabScreenUtils.tabNameBasket.click();        
    }
}

module.exports = new BottomTabScreen();