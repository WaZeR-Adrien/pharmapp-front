import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Visit} from './visit';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VisitService extends ApiClientService {

    getByPeopleId(type: string, id: number): Observable<Visit[]> {
        this.setToken();

        return this.call<Visit[]>('GET', `/${type}/${id}/visits`);
    }
}