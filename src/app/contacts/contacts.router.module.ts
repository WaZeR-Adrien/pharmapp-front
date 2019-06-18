import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsPage} from './contacts.page';

const routes: Routes = [
    {
        path: 'contacts',
        component: ContactsPage,
        children: [
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: './map/map.module#MapPageModule'
                    }
                ]
            },
            {
                path: 'list',
                children: [
                    {
                        path: '',
                        loadChildren: './list/list.module#ListPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/contacts/map',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/contacts/map',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ContactsPageRoutingModule {
}
