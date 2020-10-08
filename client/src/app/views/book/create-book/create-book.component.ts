import { Product } from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  product: Product = {
    bookName: "essa gente",
    author: "Chico Buarque",
    publisher: "Cia das letras",
    genre: "drama",
    status: "disponivel"
  };

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.product.author);
    this.service.create(this.product).subscribe((product) => {
      console.log(product);
    })
  }
}
