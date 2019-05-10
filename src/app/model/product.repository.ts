import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";
@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];
    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }
    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category).sort((a, b) => (a.quantity < b.quantity) ? 1 : -1);
    }
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    getCategories(): string[] {
        return this.categories;
    }
}