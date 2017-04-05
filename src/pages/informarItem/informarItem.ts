import { Item } from './../../modal/item';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-informar-item',
    templateUrl: 'informarItem.html'
})
export class InformarItemPage {

    private item = {name: "", description: "", url: ""};

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {

        this.item = this.navParams.get('item');

    }

    

}
