import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Contact} from './contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService extends ApiClientService {
  getAll() {
      return this.call<Contact[]>('GET', '/contacts');
  }
}
