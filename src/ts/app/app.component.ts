/**
 * Created by jgluhov on 07/01/16.
 */
import './app.component.styl';
import * as template from './app.component.jade';

import {Component, View, provide} from 'angular2/core';

import {NavbarComponent} from '../components/navbar/navbar.component.ts';

import {
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {APP_ROUTES} from './../routes.config'

@Component({
    selector: 'app',
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})

@View({
    directives: [NavbarComponent],
    template: template()
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
    constructor(){}
}