import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookReadComponent } from './components/views/book/book-read/book-read.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { CategoryCreateComponent } from './components/views/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'categories/update/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'categories/:id/books',
    component: BookReadComponent
  },
  {
    path: 'categories/:id/books/create',
    component: BookCreateComponent
  },
  {
    path: 'categories/:id/books/:id_book/update',
    component: BookUpdateComponent
  },
  {
    path: 'categories/:id/books/:id_book/delete',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
