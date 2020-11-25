import { Component, OnInit } from "@angular/core";
import { BookService } from "./../../../services/book.service";
import { Book } from "./../../../models/Book";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  booksColumns: string[] = ["id", "bookName", "author", "edit", "delete"];

  books: Book[] = [];
  panelOpenState = false;

  bookTable: MatTableDataSource<Book> = new MatTableDataSource<Book>(
    this.books
  );

  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let bookName = this.route.snapshot.paramMap.get('bookName');
    let genre = this.route.snapshot.paramMap.get('genre')
    let author = this.route.snapshot.paramMap.get('author')
    if(bookName !== null){
      this.bookService.getByName(bookName).subscribe((book)=>{
        console.log(bookName);
        this.books = book;
        this.bookTable = new MatTableDataSource<Book>(this.books);
      })
    }
    else if (genre !== null) {
      this.bookService.getByName(genre).subscribe((book)=>{
        console.log(genre);
        this.books = book;
        this.bookTable = new MatTableDataSource<Book>(this.books);
      })
    }
    else if(author !== null ){
      this.bookService.getByAuthor(author).subscribe((book)=>{
        console.log(author);
        this.books = book;
        this.bookTable = new MatTableDataSource<Book>(this.books);
      })
    }
    else{
    this.bookService.list().subscribe((list) => {
      this.books = list;
      this.bookTable = new MatTableDataSource<Book>(this.books);
    });}
  }

  navigateToCreateBook(): void {
    this.router.navigate(["/book/register"]);
  }

  delete(id: string): void {
    this.bookService.delete(id).subscribe((list) => {
      this.books = list;
      this.bookTable = new MatTableDataSource<Book>(this.books);
    });
  }

  getByName(name: string): void {
    this.bookService.getByName(name).subscribe((list) => {
      this.books = list;
      this.bookTable = new MatTableDataSource<Book>(this.books);
    });
  }

  getByGenre(genre: string): void {
    this.bookService.getByName(genre).subscribe((list) => {
      this.books = list;
      console.log(list);
      console.log(genre);
      this.bookTable = new MatTableDataSource<Book>(this.books);
    });
  }
}
