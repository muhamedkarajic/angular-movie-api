import { MovieDetailsComponent } from './../components/movie-details/movie-details.component';
import { MoviesComponent } from 'src/components/movies/movies.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie-details', component: MovieDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
