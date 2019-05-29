import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

    categories: Category[];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
    }

    getAll() {
      this.categoryService.getAll().then(categories => {
          this.categories = categories;
      });
    }

}
