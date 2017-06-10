import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {QRCodeComponent} from 'angular2-qrcode';
import {UserService} from '../../services/user';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({templateUrl: 'qr.html'})
export class GeneratrorPage {
    public user : String;
    public result:String;
    constructor(public navCtrl : NavController, public userService : UserService,public barcodeScanner: BarcodeScanner) {
        this.user = "" + JSON.stringify(this.userService.currentUser);
        this.result = new String();
        console.log(this.user);
        this
            .barcodeScanner
            .scan({
                formats:'QR_CODE'
            })
            .then((barcodeData) => {
                this.result = barcodeData.text;
            }, (err) => {
                // An error occurred
            });
    }
}
