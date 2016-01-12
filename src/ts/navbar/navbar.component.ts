/**
 * Created by jgluhov on 11/01/16.
 */
import './navbar.component.styl';
import * as template from './navbar.component.jade';

import {Component, View, provide} from 'angular2/core';

import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {Routes} from './../routes.config'

@Component({
    selector: 'navbar',
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})

@View({
    directives: [ROUTER_DIRECTIVES],
    template: template()
})

export class NavbarComponent {
    routes = Routes;
}