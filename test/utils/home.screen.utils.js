class HomeScreenUtils {
    get searchLogo() {
        return $('//*[@content-desc="GittiGidiyor logo"]');
    }

    get searchText() {
        return $('//*[@resource-id="com.gittigidiyormobil:id/appbar_search_text_autoCompleteTextView"]');
    }    
    
}

module.exports = new HomeScreenUtils();