import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Globals} from '../globals';
import {ToastController} from '@ionic/angular';
import {ToastService} from '../toast/toast.service';

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
        private toastService: ToastService
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
                    this.toastService.presentToast({
                        message: err.error.message,
                        color: 'danger'
                    });
                }
            });
    }
}
