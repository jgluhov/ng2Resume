/**
 * Created by jgluhov on 11/01/16.
 */
import './navbar.component.styl';
import * as template from './navbar.component.jade';

import {Component, View, provide} from 'angular2/core';
import {
    RouterLink
} from 'angular2/router';

import {Routes} from './../../routes.config'

@Component({
    selector: 'navbar'
})

@View({
    directives: [RouterLink],
    template: template(Routes)
})

export class NavbarComponent {}