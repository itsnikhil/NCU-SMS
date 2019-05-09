import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from, Observer } from "rxjs";
@Injectable()
export class StaticDataSource {
 private products: Product[] = [
 new Product(1, "Product 1", "","Category 1",100, 20,"Product 1 (Category 1)", "abc"),
 new Product(2, "Product 2","", "Category 1",100,20, "Product 2 (Category 1)", "abc"),
 new Product(3, "Product 3", "","Category 1", 100 ,20,"Product 3 (Category 1)", "abc"),
 new Product(4, "Product 4","", "Category 1", 100,20, "Product 4 (Category 1)", "abc"),
 new Product(5, "Product 5","", "Category 1", 100, 20,"Product 5 (Category 1)", "abc"),
 new Product(6, "Product 6","", "Category 2", 100 ,20,"Product 6 (Category 2)", "abc"),
 new Product(7, "Product 7","", "Category 2", 100,20,"Product 7 (Category 2)", "abc"),
 new Product(8, "Product 8","", "Category 2", 100,20, "Product 8 (Category 2)", "abc"),
 new Product(9, "Product 9","", "Category 2",100,20, "Product 9 (Category 2)", "abc"),
 new Product(10, "Product 10","", "Category 2", 100,20,"Product 10 (Category 2)", "abc"),
 new Product(11, "Product 11","", "Category 3", 100,20,"Product 11 (Category 3)", "abc"),
 new Product(12, "Product 12","", "Category 3", 100,20,"Product 12 (Category 3)", "abc"),
 new Product(13, "Product 13","", "Category 3",100 ,20,"Product 13 (Category 3)", "abc"),
 new Product(14, "Product 14","", "Category 3", 100,20,"Product 14 (Category 3)", "abc"),
 new Product(15, "Product 15","", "Category 3", 100,20,"Product 15 (Category 3)", "abc"),
 new Product(16, "Product 16","", "Category 4", 100, 20,"Product 1 (Category 1)", "abc"),
 new Product(17, "Product 17","", "Category 4", 100,20,"Product 2 (Category 1)", "abc"),
 new Product(18, "Product 18","", "Category 4",100, 20,"Product 3 (Category 1)", "Abc"),
 new Product(19, "Product 19","", "Category 4", 100,20,"Product 4 (Category 1)", "abc"),
 new Product(20, "Product 20","", "Category 4",100,20, "Product 5 (Category 1)", "abc"),
 new Product(21, "Product 21","", "Category 5",100,20, "Product 6 (Category 2)", "abc"),
 new Product(22, "Product 22","", "Category 5", 100,20,"Product 7 (Category 2)", "abc"),
 new Product(23, "Product 23", "","Category 5",100, 20,"Product 8 (Category 2)", "abc"),
 new Product(24, "Product 24","", "Category 5", 100,20,"Product 9 (Category 2)", "abc"),
 ];
 getProducts(): Observable <Product[]> {
     return from([this.products]);
 }
}