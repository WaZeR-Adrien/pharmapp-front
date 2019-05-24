import { Component, OnInit } from '@angular/core';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAll().subscribe(contacts =>{
      
        console.log(contacts);
        contacts.forEach(function(element){
          geocoder.geocode("'"+element.ADRESSE+" "+element.CP+" "+element.VILLE+"'", function ( err, data ) {
            console.log(data);
          })
        })
    }, err => {

    });
  }
}
