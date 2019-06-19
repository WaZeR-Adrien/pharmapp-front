import {Component, OnInit} from '@angular/core';
import {Globals} from '../globals';
import {VisitService} from '../visit/visit.service';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {

    number: number;
    lastDate: string;

    constructor(private globals: Globals, private visitService: VisitService) {
    }

    ngOnInit() {
        this.stats();
    }

    stats() {
        const people = this.globals.auth.PERSONNE;
        const type = people.TYPE.toLowerCase() + 's';

        this.visitService.getByPeopleId(type, people.ID).subscribe(visits => {
            this.number = visits.length;

            if (this.number > 0) {
                const lastVisit = visits[this.number - 1];
                this.lastDate = lastVisit.DATE + ' à ' + lastVisit.HEURE;
            }
        });
    }
}
