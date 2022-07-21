import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private service: CategoryService,
              private router: Router) { }

  ngOnInit(): void {

  }

  create(): void{
    this.service.create(this.category).subscribe({
      next: (response) => {
          this.service.message('Category created successfully!');
          this.router.navigateByUrl("/categories");
      },
      error: (error) => {
        error.error.messageErrors.map((value: any) => {
          this.service.message(value.message); 
        })     
      }
    })
  }

  back(): void{
    window.history.back();
  }

}
