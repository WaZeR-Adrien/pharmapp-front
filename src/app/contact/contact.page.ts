import {Component, OnInit} from '@angular/core';
import {People} from '../people/people';
import {ActivatedRoute} from '@angular/router';
import {ContactService} from './contact.service';
import {Command} from '../command';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    contact: People;
    commands: Command[];

    slideOpts = {
        initialSlide: 0,
        speed: 400
    };

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

            this.getCommands(id);
        });
    }

    getCommands(id: number) {
        this.contactService.getCommands(id).subscribe(commands => {
            this.commands = commands;
        });
    }

}
