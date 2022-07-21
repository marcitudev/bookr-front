import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.scss']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    name: '',
    description: ''
  };

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
      error: (error) => {
        this.service.message('Category not found!');
        window.history.back();
      }
    })
  }

  delete(): void{
    this.service.delete(this.category.id!).subscribe({
      next: (response) => {
        this.service.message('Category deleted successfully!');
        this.router.navigateByUrl("/categories");
      },
      error: (err) => {
        this.service.message(err.error.error);   
      }
    });
  }

  back(): void{
    window.history.back();
  }

}
