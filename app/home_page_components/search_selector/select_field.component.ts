/**
 * Created by Home on 07.01.2017.
 */
import {Component} from "angular2/src/core/metadata";
@Component({
 selector: 'select-field',
    template: `
<select class="custom-select">
            <option selected>Choose One...</option>
            <option value="1">Boots</option>
            <option value="2">Shoes</option>
            <option value="3">Feet</option>
        </select>
`
})
export class SelectFieldComponent{

}