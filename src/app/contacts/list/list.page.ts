import {Component} from '@angular/core';
import {ContactsPage} from '../contacts.page';

@Component({
    selector: 'app-tab2',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage {

    contacts: ContactsPage[];
    constructor(private contactService: ContactService) {
    }

}
