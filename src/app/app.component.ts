import {Component} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Globals} from './globals';
import {Router} from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
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
        },
        {
            title: 'Ajouter une personne',
            url: '/people',
            icon: 'add-circle'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private globals: Globals,
        private router: Router,
        private menu: MenuController
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

    logout() {
        localStorage.removeItem('auth');
        delete this.globals.auth;

        this.router.navigate(['/']);

        this.menu.close();
    }
}
