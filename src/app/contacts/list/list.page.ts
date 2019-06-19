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

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.contactService.getAll().subscribe(contacts => {

            console.log(contacts);
            this.contacts = contacts;
        });
    }

}
