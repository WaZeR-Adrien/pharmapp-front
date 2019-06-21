import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Globals} from '../globals';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(
        private authService: AuthService,
        private globals: Globals,
        private toastController: ToastController
    ) {
    }

    ngOnInit() {
    }

    login() {
        this.authService.login(this.email, this.password)
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
                this.globals.auth = auth;
                delete this.email;
                delete this.password;
            })
            .catch(err => {
                if (err.error.message) {
                    this.presentToast(err.error.message);
                }
            });
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }
}
