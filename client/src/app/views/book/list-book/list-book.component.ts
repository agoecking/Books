import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.list().subscribe((list) => {
      console.log(list);
      this.products = list;
    });
  }
  navigateToCreateProduct(): void {
    this.router.navigate(['product/create']);
  }
}
