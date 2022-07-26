import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  
  book: Book = {
    title: '',
    author: '',
    text: ''
  }
  
  category_id: String = '';
  
  title = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  author = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);
  text = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(2000000)]);

  constructor(private service: BookService,
              private activeRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.category_id = this.activeRouter.snapshot.paramMap.get('id')!;
  }

  create(): void{
    this.service.create(this.book, this.category_id).subscribe({
      next: (response) => {
          this.service.message('Book created successfully!');
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
