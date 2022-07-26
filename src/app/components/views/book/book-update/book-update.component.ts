import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  book: Book = {
    title: '',
    author: '',
    text: ''
  }
  
  category_id: String = '';
  book_id: String = '';
  
  title = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  author = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  text = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(2000000)]);

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

  update(): void{
    this.service.update(this.book, this.book_id).subscribe({
      next: (response) => {
          this.service.message('Book updated successfully!');
          this.router.navigateByUrl(`/categories/${this.category_id}/books`);
      },
      error: (error) => {
        error.error.messageErrors.map((value: any) => {
          this.service.message(value.message); 
        })     
      }
    })
  }

  formIsValid(): boolean{
    return (this.title.invalid ||
            this.author.invalid ||
            this.text.invalid) ? true : false;
  }

  back(): void{
    window.history.back();
  }


}
