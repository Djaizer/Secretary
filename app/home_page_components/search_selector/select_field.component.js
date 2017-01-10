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
    var SelectFieldComponent;
    return {
        setters:[
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            }],
        execute: function() {
            SelectFieldComponent = (function () {
                function SelectFieldComponent() {
                }
                SelectFieldComponent = __decorate([
                    metadata_1.Component({
                        selector: 'select-field',
                        template: "\n<select class=\"custom-select\">\n            <option selected>Choose One...</option>\n            <option value=\"1\">Boots</option>\n            <option value=\"2\">Shoes</option>\n            <option value=\"3\">Feet</option>\n        </select>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectFieldComponent);
                return SelectFieldComponent;
            }());
            exports_1("SelectFieldComponent", SelectFieldComponent);
        }
    }
});
//# sourceMappingURL=select_field.component.js.map