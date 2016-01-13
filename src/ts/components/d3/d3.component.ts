/**
 * Created by jgluhov on 13/01/16.
 */
import {Component} from 'angular2/core';
import d3 = require('d3/d3');
import * as Rx from 'rxjs';

@Component({
    selector: 'd3',
    template: `<div>D3 component</div>`
})

export class D3Component {
    constructor() {
        let timer = Rx.Observable.interval(1000);
        let subscription = timer.subscribe(() => console.log(new Date()));
    }
}
