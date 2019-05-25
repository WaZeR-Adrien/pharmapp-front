import {Component, OnInit} from '@angular/core';
import {ApiClientService} from '../api-client/api-client.service';
import {ContactService} from '../contact/contact.service';
import {Personne} from '../people/personne';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
    contacts: Personne[];

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getAll().subscribe(contacts => {
            this.contacts = contacts;
        });
    }
}
