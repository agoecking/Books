import { Component, OnInit } from "@angular/core"
import { BookService } from "./../../../services/book.service"
import { Book } from "./../../../models/Book"
import { Router } from "@angular/router"
import { MatTableDataSource } from "@angular/material/table"

@Component({
    selector: "app-book-list",
    templateUrl: "./book-list.component.html",
    styleUrls: [ "./book-list.component.css"]
})

export class BookListComponent implements OnInit {
    booksColumns: string[] = ["id", "edit", "delete"];

    books: Book [] = [];
    
    bookTable: MatTableDataSource<Book> = new MatTableDataSource<Book>(this.books)
    constructor(private router: Router, private bookService: BookService){}

    ngOnInit(): void {
        this.bookService.list().subscribe((list) => {
            this.books = list;
        })
    }

    navigateToCreateBook(): void {
        this.router.navigate(['/book/register'])
    }

    // delete(id: string): void{
    //     this.bookService.delete(id).subscribe((lista) => {
    //       this.books = lista;      
    //       this.booksTable = new MatTableDataSource<Book>(this.books);
    //     });
    //   }
}