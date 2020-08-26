import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AllBooksComponent } from './books/components/all-books/all-books.component';
import { TitleComponent } from './books/components/title/title.component';
import { DateComponent } from './books/components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AllBooksComponent,
    TitleComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
