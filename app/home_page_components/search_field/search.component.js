System.register(["angular2/src/core/metadata"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var metadata_1;
    var SearchCommonComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            }],
        execute: function() {
            /**
             * Created by Home on 05.01.2017.
             */
            SearchCommonComponent = (function () {
                function SearchCommonComponent() {
                }
                SearchCommonComponent = __decorate([
                    metadata_1.Component({
                        selector: 'search',
                        templateUrl: '/app/home_page_components/search_field/search.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchCommonComponent);
                return SearchCommonComponent;
            }());
            exports_1("SearchCommonComponent", SearchCommonComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map