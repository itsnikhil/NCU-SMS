import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from, Observer } from "rxjs";
@Injectable()
export class StaticDataSource {
 private products: Product[] = [
 new Product(1, "Product 1", "May 9, 2019","Category 1",100, 20,"Product 1 (Category 1)", "abc"),
 new Product(2, "Product 2","May 9, 2019", "Category 1",110,21, "Product 2 (Category 1)", "abc"),
 new Product(3, "Product 3", "May 9, 2019","Category 1", 120 ,22,"Product 3 (Category 1)", "abc"),
 new Product(4, "Product 4","May 9, 2019", "Category 1", 130,23, "Product 4 (Category 1)", "abc"),
 new Product(5, "Product 5","May 9, 2019", "Category 1", 140, 24,"Product 5 (Category 1)", "abc"),
 new Product(6, "Product 6","May 9, 2019", "Category 2", 150 ,25,"Product 6 (Category 2)", "abc"),
 new Product(7, "Product 7","May 9, 2019", "Category 2", 160,26,"Product 7 (Category 2)", "abc"),
 new Product(8, "Product 8","May 9, 2019", "Category 2", 170,27, "Product 8 (Category 2)", "abc"),
 new Product(9, "Product 9","May 9, 2019", "Category 2",180,28, "Product 9 (Category 2)", "abc"),
 new Product(10, "Product 10","May 9, 2019", "Category 2", 190,29,"Product 10 (Category 2)", "abc"),
 new Product(11, "Product 11","May 9, 2019", "Category 3", 100,30,"Product 11 (Category 3)", "abc"),
 new Product(12, "Product 12","May 9, 2019", "Category 3", 110,31,"Product 12 (Category 3)", "abc"),
 new Product(13, "Product 13","May 9, 2019", "Category 3",120 ,32,"Product 13 (Category 3)", "abc"),
 new Product(14, "Product 14","May 9, 2019", "Category 3", 130,33,"Product 14 (Category 3)", "abc"),
 new Product(15, "Product 15","May 9, 2019", "Category 3", 140,34,"Product 15 (Category 3)", "abc"),
 new Product(16, "Product 16","May 9, 2019", "Category 4", 150, 35,"Product 1 (Category 1)", "abc"),
 new Product(17, "Product 17","May 9, 2019", "Category 4", 160,36,"Product 2 (Category 1)", "abc"),
 new Product(18, "Product 18","May 9, 2019", "Category 4",170, 37,"Product 3 (Category 1)", "Abc"),
 new Product(19, "Product 19","May 9, 2019", "Category 4", 180,38,"Product 4 (Category 1)", "abc"),
 new Product(20, "Product 20","May 9, 2019", "Category 4",190,39, "Product 5 (Category 1)", "abc"),
 new Product(21, "Product 21","May 9, 2019", "Category 5",100,40, "Product 6 (Category 2)", "abc"),
 new Product(22, "Product 22","May 9, 2019", "Category 5", 110,41,"Product 7 (Category 2)", "abc"),
 new Product(23, "Product 23", "May 9, 2019","Category 5",120, 41,"Product 8 (Category 2)", "abc"),
 new Product(24, "Product 24","May 9, 2019", "Category 5", 130,42,"Product 9 (Category 2)", "abc"),
 ];
 getProducts(): Observable <Product[]> {
     return from([this.products]);
 }
}