import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapService} from '../../contacts/map/map.service';
import {ContactService} from '../contact.service';

import { HttpClient } from '@angular/common/http';
import {forEach} from '@angular-devkit/schematics';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-tab1',
    templateUrl: 'map.page.html',
    styleUrls: ['map.page.scss']
})
export class MapPage implements OnInit {

    // default settings
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/outdoors-v9';
    lat = 48.8583;
    lng = 2.294499999999971;

    // data
    markers: any;

    constructor(private mapService: MapService, private contactService: ContactService, private http: HttpClient) {
    }

    ngOnInit() {
        this.getAllMarker();
        this.initializeMap();

    }

    private initializeMap() {
        /// locate the user
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.map.flyTo({
                    center: [this.lng, this.lat]
                });
                this.markers = new mapboxgl.Marker()
                    .setLngLat([this.lng, this.lat])
                    .addTo(this.map);

            });
        }
        this.buildMap();
    }

    getAllMarker() {
        this.contactService.getAll().subscribe(peoples => {
            for (const people of peoples) {
                const address = people.ADRESSE.replace(/\ /g, '%20');
                const city = people.VILLE.replace(/\ /g, '%20');
                this.http.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '%20' + people.CP + '%20' + city + '.json?access_token=' + environment.accessToken + '&country=fr&types=address&limit=1').subscribe((responses) => {
                    const lng = responses.features[0].geometry.coordinates[0];
                    const lat = responses.features[0].geometry.coordinates[1];
                    this.markers = new mapboxgl.Marker()
                        .setLngLat([lng, lat])
                        .addTo(this.map);
                });
            }
        });
    }

    buildMap() {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 15,
            center: [this.lng, this.lat]
        });

        /// Add map controls
        this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    }

}
