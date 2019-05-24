import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Auth} from './auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends ApiClientService {

    login(email: string, mdp: string) {
        return new Promise<Auth>((resolve, reject) => {

            this.body = {
                email, mdp
            };

            return this.call<any>('POST', '/auth')
                .subscribe(res => {
                    if (res) {
                        const auth = new Auth();
                        auth.ID = res.auth.ID;
                        auth.DATE = res.auth.DATE;
                        auth.TOKEN = res.auth.TOKEN;
                        auth.PERSONNE = res.personne;

                        return resolve(auth);
                    }

                    return reject(false);
                });
        });
    }
}
