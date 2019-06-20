import {Component, OnInit} from '@angular/core';
import {PeopleService} from './people.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.page.html',
    styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

    type: string;
    name: string;
    firstName: string;
    email: string;
    address: string;
    postalCode: number;
    city: string;
    hiringDate: string;
    status: string;
    socialReason: string;
    responsible: string;

    constructor(private peopleService: PeopleService) {
    }

    ngOnInit() {
    }

    add() {
        const data = {
            TYPE: this.type,
            NOM: this.name,
            PRENOM: this.firstName,
            EMAIL: this.email,
            ADRESSE: this.address,
            CP: this.postalCode,
            VILLE: this.city,
            DATEEMBAUCHE: this.hiringDate,
            STATUT: this.status,
            APPARTENIR_ID: this.socialReason,
            ETRE_RESPONSABLE: this.responsible
        };

        this.peopleService.add(data).subscribe(people => {

        });
    }

}
