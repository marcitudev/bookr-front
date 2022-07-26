import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.scss']
})
export class BookReadComponent implements OnInit {

  books: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'read', 'actions'];
  id: String = '';

  constructor(private activeRouter: ActivatedRoute,
              private service: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.findAllByCategory(this.id);
  }

  findAllByCategory(id: String): void{
    this.service.findAllByCategory(id).subscribe({
      next: (response) => this.books = response
    })
  }

  create(): void{
    this.router.navigateByUrl(`categories/${this.id}/books/create`);
  }

}
