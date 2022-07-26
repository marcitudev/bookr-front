import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
    text: ''
  }
  
  category_id: String = '';
  book_id: String = '';

  constructor(private service: BookService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.category_id = this.activeRouter.snapshot.paramMap.get('id')!;
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

  delete(): void{
    this.service.delete(this.book_id).subscribe({
      next: (response) => {
          this.service.message('Book deleted successfully!');
          this.router.navigateByUrl(`/categories/${this.category_id}/books`);
      },
      error: (error) => this.service.message("Book not deleted!")
    })
  }

  back(): void{
    window.history.back();
  }

}
