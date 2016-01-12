/**
 * Created by jgluhov on 11/01/16.
 */
import './navbar.component.styl';
import * as template from './navbar.component.jade';

import {Component, View, provide} from 'angular2/core';

import {Routes} from './../routes.config'

@Component({
    selector: 'navbar'
})

@View({
    template: template()
})

export class NavbarComponent {
    routes = Routes;
}