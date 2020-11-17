import { Component, OnInit } from "@angular/core";
import { Book } from "src/app/models/Book";
import { MatTableDataSource } from "@angular/material/table";
import {BookService} from "src/app/services/book.service"
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-book-create",
  templateUrl: "./book-create.component.html",
  styleUrls: ["./book-create.component.css"]
})

export class BookCreateComponent implements OnInit{
  book: Book = new Book();

  bookName: string;
  author: string;
  isbn: string;
  genre: string;
  publisher: string;
  status: string;

  constructor(private router: Router, private service: BookService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    let genre = this.route.snapshot.paramMap.get("genre");
    if(genre !== null){
      this.service.getByGenre(genre).subscribe((book) => {
        this.book = book;
      });
    }
  }

  create(): void{
    if(this.book._id == null){
      this.service.create(this.book).subscribe((book) => {
        console.log(book);
      });
    } else {
      this.service.update(this.book).subscribe((book) => {
        console.log(book);
      })
    }
  }

}
