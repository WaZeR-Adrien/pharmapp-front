import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from './product';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

    products: Product[];
    productsDisplayed: Product[];

    search: string;

    constructor(private productService: ProductService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParamMap
            .subscribe(params => {
                this.getById(params.get('categoryId'));
            });
    }

    getById(id: string) {
        this.productService.getById(id).subscribe(products => {
            this.products = products;
            this.productsDisplayed = products.slice(0, 10);
        });
    }

    loadData(event) {
        setTimeout(() => {
            const length = this.productsDisplayed.length;

            this.products.slice(length - 1, length + 9).forEach(product => {
                this.productsDisplayed.push(product);
            });

            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.products.length === 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }

}
