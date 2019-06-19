import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Globals} from './globals';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Accueil',
            url: '',
            icon: 'home'
        },
        {
            title: 'Calculatrice',
            url: '/calc',
            icon: 'calculator'
        },
        {
            title: 'Contacts',
            url: '/contacts',
            icon: 'map'
        },
        {
            title: 'Catégories & produits',
            url: '/categories',
            icon: 'list-box'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private globals: Globals
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.globals.auth = JSON.parse(localStorage.getItem('auth'));
        });
    }
}
