import { Item } from './../../modal/item';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';

import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-agregar-item',
    templateUrl: 'agregarItem.html'
})
export class AgregarItemPage {

    private newItemForm = {name: "", description: "", url: ""};

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    }

    hacerElDismiss(){
         this.viewCtrl.dismiss(new Item(this.newItemForm.name, this.newItemForm.description, this.newItemForm.url));                
    }
    cancelar(){
        this.viewCtrl.dismiss(new Item("", "", ""));
    }
}
