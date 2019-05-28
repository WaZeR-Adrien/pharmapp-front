import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MapService} from './map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

    // default settings
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/outdoors-v9';
    lat = 48.8583;
    lng = 2.294499999999971;

    // data
    source: any;
    markers: any;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
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
