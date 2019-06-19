import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'contacts.page.html',
    styleUrls: ['contacts.page.scss']
})
export class ContactsPage implements OnInit {

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
    }

}
