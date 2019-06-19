import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from './category';
import {CategoryService} from './category.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'app-products',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    categories: Category[];
    categoriesDisplayed: Category[];

    search: string;

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.categoryService.getAll().subscribe(categories => {
            this.categories = categories;
            this.categoriesDisplayed = categories.slice(0, 10);
        });
    }

    loadData(event) {
        setTimeout(() => {
            const length = this.categoriesDisplayed.length;

            this.categories.slice(length - 1, length + 9).forEach(category => {
                this.categoriesDisplayed.push(category);
            });

            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.categories.length === 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }

}
