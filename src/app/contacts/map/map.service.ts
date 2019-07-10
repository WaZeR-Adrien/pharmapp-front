import {Injectable} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../../environments/environment';
import {ApiClientService} from '../../api-client/api-client.service';

@Injectable({
    providedIn: 'root'
})
export class MapService{

    constructor() {
        (mapboxgl as typeof mapboxgl).accessToken = environment.accessToken;
    }
}
