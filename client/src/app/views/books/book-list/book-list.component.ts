import { Component, OnInit, ViewChild } from "@angular/core";
import { BookService } from "./../../../services/book.service";
import { Book } from "./../../../models/Book";
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  booksColumns: string[] = ["bookName", "author", "isbn", "genre", "publisher", "status","preco", "edit", "delete"];

  books: Book[] = [];
  bookName: string;
  

  bookTable: MatTableDataSource<Book> = new MatTableDataSource<Book>(
    this.books
  );

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
     this.bookService.list().subscribe((list) => {
       this.books = list;
       this.bookTable = new MatTableDataSource<Book>(this.books);
       this.bookTable.paginator =  this.paginator;
      })
    
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


  public doFilter = (value: string) => {
    this.bookTable.filter = value.trim().toLocaleLowerCase();
  }

}
