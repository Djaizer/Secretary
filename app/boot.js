System.register(['angular2/platform/browser', "angular2/src/router/router_providers", "./home_page.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_providers_1, home_page_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_providers_1_1) {
                router_providers_1 = router_providers_1_1;
            },
            function (home_page_component_1_1) {
                home_page_component_1 = home_page_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_page_component_1.HomePage, router_providers_1.ROUTER_PROVIDERS);
        }
    }
});
//# sourceMappingURL=boot.js.map