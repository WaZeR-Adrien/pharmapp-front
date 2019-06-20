import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {People} from './people';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService extends ApiClientService {

    add(data): Observable<People> {
        this.body = data;
        this.setToken();
        return this.call<People>('POST', `/${data.type}`);
    }

}
