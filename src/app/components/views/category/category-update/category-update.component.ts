import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoryService,
              private routerActive: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.routerActive.snapshot.paramMap.get('id');
    this.findById(id!);
  }

  findById(id: String): void{
    this.service.findById(id).subscribe({
      next: (response) => this.category = response,
      error: (err) => {
        this.service.message("Category not found!");
        this.back();
      }
    })
  }

  update(): void{
    this.service.update(this.category).subscribe({
      next: (response) => {
          this.service.message('Category updated successfully!');
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
