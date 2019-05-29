import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VisitPage} from './visit.page';

const routes: Routes = [
    {
        path: 'visit',
        component: VisitPage,
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
                redirectTo: '/visit/map',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/visit/map',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class VisitPageRoutingModule {}
