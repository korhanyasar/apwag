const HomeScreenUtils = require("../utils/home.screen.utils");

class HomeScreen {    

    async validateHomeScreenOpened() {
        await driver.pause(3000);        
        await expect(HomeScreenUtils.searchLogo).toBeExisting();
    }

    async searchProduct() {
        await HomeScreenUtils.searchText.click();
        await driver.pause(3000);

        await driver.sendKeyEvent("37");
        await driver.sendKeyEvent("44");
        await driver.sendKeyEvent("36");
        await driver.sendKeyEvent("43");
        await driver.sendKeyEvent("42");
        await driver.sendKeyEvent("33");
        await driver.sendKeyEvent("66");

        await driver.pause(3000);
    }
}

module.exports = new HomeScreen();