import {Component} from "angular2/src/core/metadata";
import {SelectFieldComponent} from "./select_field.component";
/**
 * Created by Home on 05.01.2017.
 */

@Component({
    selector: 'collapsed-selector',
    templateUrl: '/app/home_page_components/search_selector/search_selector.component.html',
    styleUrls: ['/app/home_page_components/search_selector/search_selector.component.css'],
    directives: [SelectFieldComponent]
})
export class SearchSelectorComponent {

}