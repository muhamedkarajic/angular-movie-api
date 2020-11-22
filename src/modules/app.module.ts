import { RouterModule } from '@angular/router';
import { ContainerComponent } from './../components/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app/app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MoviesComponent } from 'src/components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePreviewComponent } from 'src/components/movie-preview/movie-preview.component';
import { SearchComponent } from 'src/components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ContainerComponent, MoviesComponent, MoviePreviewComponent, SearchComponent],
  exports: [NavbarComponent, ContainerComponent, MoviesComponent, MoviePreviewComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
