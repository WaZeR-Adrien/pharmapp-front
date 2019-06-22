import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {People} from '../people/people';

@Injectable({
    providedIn: 'root'
})
export class ContactService extends ApiClientService {

    getById(id: number) {
        this.setToken();

        return this.call<People>('GET', '/contacts/' + id);
    }

    getAll() {
        this.setToken();

        return this.call<People[]>('GET', '/contacts');
    }

}
