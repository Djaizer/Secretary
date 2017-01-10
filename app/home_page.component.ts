import {Component} from "angular2/src/core/metadata";
import {SearchCommonComponent} from "./home_page_components/search_field/search.component";
import {SearchSelectorComponent} from "./home_page_components/search_selector/search_selector.component";
/**
 * Created by Home on 05.01.2017.
 */

@Component({
    selector: 'home',
    templateUrl: '/app/home_page.component.html',
    directives: [SearchCommonComponent, SearchSelectorComponent]
})
export class HomePage {
}