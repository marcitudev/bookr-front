import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/templates/header/header.component";
import { FooterComponent } from "./components/templates/footer/footer.component";
import { NavComponent } from "./components/templates/nav/nav.component";
import { HomeComponent } from "./components/views/home/home.component";
import { CategoryReadComponent } from "./components/views/category/category-read/category-read.component";
import { CategoryCreateComponent } from "./components/views/category/category-create/category-create.component";
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { BookReadComponent } from './components/views/book/book-read/book-read.component';
import { BookCreateComponent } from './components/views/book/book-create/book-create.component';
import { BookUpdateComponent } from './components/views/book/book-update/book-update.component';
import { BookDeleteComponent } from './components/views/book/book-delete/book-delete.component';
import { BookSpecificReadComponent } from './components/views/book/book-specific-read/book-specific-read.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoryReadComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent,
    BookReadComponent,
    BookCreateComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    BookSpecificReadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
