import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './home/home.module#HomePageModule'},
    {path: 'calc', loadChildren: './calc/calc.module#CalcPageModule'},
    {path: '', loadChildren: './contacts/contacts.module#ContactsPageModule'}
    {path: 'stats', loadChildren: './stat/stat.module#StatPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
