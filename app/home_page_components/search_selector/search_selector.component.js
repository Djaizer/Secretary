System.register(["angular2/src/core/metadata", "./select_field.component"], function(exports_1, context_1) {
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
    var metadata_1, select_field_component_1;
    var SearchSelectorComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            },
            function (select_field_component_1_1) {
                select_field_component_1 = select_field_component_1_1;
            }],
        execute: function() {
            /**
             * Created by Home on 05.01.2017.
             */
            SearchSelectorComponent = (function () {
                function SearchSelectorComponent() {
                }
                SearchSelectorComponent = __decorate([
                    metadata_1.Component({
                        selector: 'collapsed-selector',
                        templateUrl: '/app/home_page_components/search_selector/search_selector.component.html',
                        styleUrls: ['/app/home_page_components/search_selector/search_selector.component.css'],
                        directives: [select_field_component_1.SelectFieldComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchSelectorComponent);
                return SearchSelectorComponent;
            }());
            exports_1("SearchSelectorComponent", SearchSelectorComponent);
        }
    }
});
//# sourceMappingURL=search_selector.component.js.map