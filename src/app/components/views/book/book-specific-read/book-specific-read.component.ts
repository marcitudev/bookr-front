import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-specific-read',
  templateUrl: './book-specific-read.component.html',
  styleUrls: ['./book-specific-read.component.scss']
})
export class BookSpecificReadComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
    text: ''
  }

  book_id: String = '';

  constructor(private service: BookService,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.book_id= this.activeRouter.snapshot.paramMap.get('id_book')!;
    this.findById(this.book_id);
  }

  findById(id: String): void{
    this.service.findById(id).subscribe({
      next: (response) => this.book = response,
      error: (error) => {
        this.service.message("Object not found!");
        this.back();
      }
    })
  }

  back(): void{
    window.history.back();
  }

}
