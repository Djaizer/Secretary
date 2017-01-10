import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from "angular2/src/router/route_config_impl";
import {AlbumsComponent} from "./albums.component";
import {AlbumComponent} from "./album.component";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent {
}