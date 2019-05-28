import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {VisitPage} from './visit.page';
import {VisitPageRoutingModule} from './visit-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VisitPageRoutingModule
    ],
    declarations: [VisitPage]
})
export class VisitPageModule {
}
