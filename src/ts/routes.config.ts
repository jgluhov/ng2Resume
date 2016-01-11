/**
 * Created by jgluhov on 11/01/16.
 */
import {RouteDefinition} from 'angular2/router';

import {HomeComponent} from './home/home.component'
import {AboutComponent} from "./about/about.component";

export const Routes = {
    home: {
        path: '/',
        as: 'Home',
        component: HomeComponent,
        link: ['/Home'],
        useAsDefault: true
    },
    about: {
        path: '/about',
        as: 'About',
        component: AboutComponent,
        link: ['/About']
    }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);