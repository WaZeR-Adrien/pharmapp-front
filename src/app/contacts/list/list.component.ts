import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {Personne} from '../../people/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    contacts: Personne[];

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getAll().subscribe(contacts => {

            console.log(contacts);
            this.contacts = contacts;
        }, err => { });
    }
}