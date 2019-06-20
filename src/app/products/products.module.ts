import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProductsPage} from './products.page';
import {SearchPipe} from '../pipes/search.pipe';
import {PipesModule} from '../pipes/pipes.module';
import {FilterPipeModule} from 'ngx-filter-pipe';

const routes: Routes = [
    {
        path: '',
        component: ProductsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        FilterPipeModule
    ],
    declarations: [ProductsPage]
})
export class ProductsPageModule {
}
