import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Personne} from '../people/personne';

@Injectable({
    providedIn: 'root'
})
export class ContactService extends ApiClientService {
    getAll() {
        this.setToken();

        return this.call<Personne[]>('GET', '/contacts');
    }
}
