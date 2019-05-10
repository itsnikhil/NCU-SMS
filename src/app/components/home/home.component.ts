import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent {
  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;
  constructor(private repository: ProductRepository) { }
  ngAfterViewInit() {
    this.onResize(document.querySelector('.catGroup'));
  }
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }
  onResize(event: any){
    if(window.innerWidth < 500){
      document.querySelector('.catGroup').classList.add('flex-wrap');
    }else{
      document.querySelector('.catGroup').classList.remove('flex-wrap');
    }
  }
  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository
  //     .getProducts(this.selectedCategory).length / this.productsPerPage))
  //     .fill(0).map((x, i) => i + 1);
  // }
}