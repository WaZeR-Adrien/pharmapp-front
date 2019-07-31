import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Organization} from './organization';

@Injectable({
    providedIn: 'root'
})
export class OrganizationService extends ApiClientService {

    getAll() {
        return this.call<Organization[]>('GET', '/organisations');
    }
}
