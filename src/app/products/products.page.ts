import {Component, OnInit} from '@angular/core';
import {Category} from './category';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

    categories: Category[];

    constructor() {
    }

    ngOnInit() {
    }

}
