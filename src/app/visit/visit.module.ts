import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {VisitPage} from './visit.page';
import {MapService} from './map/map.service';

const routes: Routes = [
    {
        path: '',
        component: VisitPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [VisitPage],
    providers: [MapService]
})
export class MapPageModule {
}
