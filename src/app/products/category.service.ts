import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Category} from './category';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends ApiClientService {
    getAll() {
        return this.call<Category[]>('GET', '/categories');
    }
}
