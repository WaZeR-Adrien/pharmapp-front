import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    contacts: Contact[];

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getAll().subscribe(contacts => {

            console.log(contacts);
            this.contacts = contacts;
        }, err => { });
    }
}