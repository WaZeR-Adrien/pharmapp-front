import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client/api-client.service';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/contact';
import { getComponentDef } from '@angular/core/src/render3/definition';
import { getOrCreateNodeInjectorForNode } from '@angular/core/src/render3/di';

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

        })
    }, err => {

    });
  }
}
