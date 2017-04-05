import { InformarItemPage } from './../informarItem/informarItem';
import { Item } from './../../modal/item';
import { AgregarItemPage } from './../agregarItem/agregarItem';
import { Component } from '@angular/core';
import { ModificarItemPage } from './../modificarItem/modificarItem';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public items: Array<Item>;

    constructor(public navCtrl: NavController, public navPar: NavParams, private modalCtrl: ModalController, private alertCtrl: AlertController) {
        this.items = new Array();
    }

    siguiente() {
        let modal = this.modalCtrl.create(AgregarItemPage);
        modal.present();

        modal.onDidDismiss(data => {
            if (data.name == "" || data.url == "") {
                this.showAlert('No Has Agregado Correctamente los Datos!');
            }
            else {
                this.items.push(data);
            }
        });
    }

    showAlert(descripcion) {
        let alert = this.alertCtrl.create({
            title: 'error',
            subTitle: descripcion,
            buttons: ['OK']
        });
        alert.present();
    }

    modificar(item) {

        let modal = this.modalCtrl.create(ModificarItemPage, { item: item });
        modal.present();

        modal.onDidDismiss(data => {
            if (data.name == "" || data.url == "") {
                this.showAlert('No Se pueden dejar espacios en blanco!');
            } else {
                let index = this.items.indexOf(item);
                if (index > -1) {
                    this.items[index] = data;
                }
            }
        })
    }

    informar(item) {

        this.navCtrl.push(InformarItemPage, { item: item });

    }
    removeItem(item) {
        let alert = this.alertCtrl.create({
            title: 'Eliminar',
            subTitle: 'oye, estas seguro ?????',
            buttons: [{
                text: 'Cancel',
            }, {
                text: 'Yeahh',
                handler: () => {
                    let index = this.items.indexOf(item);
                    if (index > -1) {
                        this.items.splice(index, 1);
                    }
                }
            },]
        });
        alert.present();

    }

}
