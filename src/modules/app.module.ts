import { ContainerComponent } from './../components/container/container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from 'src/components/app/app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MoviesComponent } from 'src/components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePreviewComponent } from 'src/components/movie-preview/movie-preview.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ContainerComponent, MoviesComponent, MoviePreviewComponent],
  exports: [NavbarComponent, ContainerComponent, MoviesComponent, MoviePreviewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
