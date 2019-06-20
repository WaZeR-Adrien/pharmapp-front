import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomePageModule'},
    {path: 'calc', loadChildren: './calc/calc.module#CalcPageModule'},
    {path: '', loadChildren: './contacts/contacts.module#ContactsPageModule'},
    {path: 'products', loadChildren: './products/products.module#ProductsPageModule'},
    {path: 'categories', loadChildren: './products/categories.module#CategoriesPageModule'},  { path: 'people', loadChildren: './people/people.module#PeoplePageModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
