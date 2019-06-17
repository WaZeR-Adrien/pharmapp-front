import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ContactsPage} from './contacts.page';
import {ContactsPageRoutingModule} from './contacts.router.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ContactsPageRoutingModule
    ],
    declarations: [ContactsPage]
})
export class ContactsPageModule {
}
