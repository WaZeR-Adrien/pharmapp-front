import {Injectable} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';

@Injectable()
export class MapService {

    constructor() {
        (mapboxgl as typeof mapboxgl).accessToken = environment.accessToken;
    }
}
