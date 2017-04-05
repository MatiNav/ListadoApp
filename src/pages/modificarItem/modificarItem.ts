import { Item } from './../../modal/item';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modificar-item',
    templateUrl: 'modificarItem.html'
})
export class ModificarItemPage {

    private newItemForm = {name: "", description: "", url: ""};

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {

        this.newItemForm = this.navParams.get('item');

    }

    hacerElDismiss(){
         this.viewCtrl.dismiss(this.newItemForm);                
    }
    cancelar(){
        this.viewCtrl.dismiss({name: "", description: "", url: ""});
    }

}
