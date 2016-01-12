/**
 * Created by jgluhov on 11/01/16.
 */
import {RouteDefinition} from 'angular2/router';

import {HomeComponent} from './pages/home/home.component'
import {AboutComponent} from "./pages/about/about.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

export const Routes = {
    items: {
        home: {
            path: '/',
            as: 'Home',
            component: HomeComponent,
            link: ["[\'/Home\']"],
            useAsDefault: true
        },
        about: {
            path: '/about',
            as: 'About',
            component: AboutComponent,
            link: ["[\'/About\']"]
        },
        contacts: {
            path: '/contacts',
            as: 'Contacts',
            component: ContactsComponent,
            link: ["[\'/Contacts\']"]
        }
    }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes.items).map((name) => Routes.items[name]);