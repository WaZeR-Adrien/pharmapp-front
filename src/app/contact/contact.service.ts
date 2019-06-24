import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {People} from '../people/people';
import {Command} from '../command';

@Injectable({
    providedIn: 'root'
})
export class ContactService extends ApiClientService {

    getById(id: number) {
        this.setToken();

        return this.call<People>('GET', '/contacts/' + id);
    }

    getCommands(id: number) {
        this.setToken();

        return this.call<Command[]>('GET', '/contacts/' + id + '/commands');
    }

    getAll() {
        this.setToken();

        return this.call<People[]>('GET', '/contacts');
    }

}
