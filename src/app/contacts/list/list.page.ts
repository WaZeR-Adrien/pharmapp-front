import {Component, OnInit} from '@angular/core';
import {People} from '../../people/people';
import {ContactService} from '../contact.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    contacts: People[];
    contactsDisplayed: People[];

    search: string;

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.contactService.getAll().subscribe(contacts => {
            this.contacts = contacts;
            this.contactsDisplayed = contacts.slice(0, 10);
        });
    }

    loadData(event) {
        setTimeout(() => {
            const length = this.contactsDisplayed.length;

            this.contacts.slice(length - 1, length + 9).forEach(contact => {
                this.contactsDisplayed.push(contact);
            });

            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.contacts.length === 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }

}
