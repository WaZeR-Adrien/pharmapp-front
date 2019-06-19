import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';
import {SearchPipe} from '../pipes/search.pipe';
import {NgxMasonryModule} from 'ngx-masonry';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxMasonryModule
  ],
  declarations: [CategoriesPage, SearchPipe]
})
export class CategoriesPageModule {}
