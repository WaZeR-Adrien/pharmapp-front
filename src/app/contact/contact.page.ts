import {Component, OnInit} from '@angular/core';
import {People} from '../people/people';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    contact: People;

    constructor(private route: ActivatedRoute, private contactService: ContactService) {
    }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                this.getById(params.id);
            });
    }

    getById(id: number) {
        this.contactService.getById(id).subscribe(people => {
            this.contact = people;
        });
    }

}
