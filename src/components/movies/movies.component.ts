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
  query: string = '';
  page: number = 1;

  constructor(private movieService: MovieService) {
    this.movieResponse$ = this.movieService.getTopRated();
  }

  keywordChange(query: string) {
    if (query && query.length >= 3)
      this.movieResponse$ = this.movieService.getAll(query);
    else {
      this.movieResponse$ = this.movieService.getTopRated(1);
    }
    this.query = query;
    this.page = 1;
  }

  pageChange(page: number) {
    if (this.query && this.query.length >= 3)
      this.movieResponse$ = this.movieService.getAll(this.query, page);
    else {
      this.movieResponse$ = this.movieService.getTopRated(page);
    }
    this.page = page;
  }
}
