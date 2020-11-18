import { tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from 'src/components/models/movie-response.model';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movieResponse$: Observable<MovieResponse>;

  constructor(private movieService: MovieService) {
   this.movieResponse$ = this.movieService.getTopRated().pipe(tap(console.log));
  }
}
