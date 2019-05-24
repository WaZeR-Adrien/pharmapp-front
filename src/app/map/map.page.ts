import {Component, OnInit} from '@angular/core';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWx0b3Vzc2FpbnQiLCJhIjoiY2p2cDBnemR6MXhnbjRhbnpvNGU0Ync2MCJ9.hSDPzS6Lh9ZJGSkalwBFRQ';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
        });
    }
}
