/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, View} from 'angular2/core'

@Component({
    selector: 'app'
})

@View({
    template: `<h1>The best programmer is {{name}}</h1>`
})

export class AppComponent {
    name: string = 'JGluhov'
}