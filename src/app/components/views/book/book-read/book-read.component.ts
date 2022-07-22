import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

  books: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'inform', 'actions'];

  constructor(private ActiveRouter: ActivatedRoute,
              private service: BookService) { }

  ngOnInit(): void {
    const id = this.ActiveRouter.snapshot.paramMap.get('id');
    this.findAllByCategory(id!);
  }

  findAllByCategory(id: String){
    this.service.findAllByCategory(id).subscribe({
      next: (response) => this.books = response
    })
  }

  

}
