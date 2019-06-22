import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(private toastController: ToastController) {
    }

    async presentToast(options: any) {
        options.duration = 3000;
        const toast = await this.toastController.create(options);
        toast.present();
    }
}
