import {Injectable} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {Product} from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ApiClientService {

    getById(id: string) {
        return this.call<Product[]>('GET', '/categories/' + id + '/products');
    }

}
