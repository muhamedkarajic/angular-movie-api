import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieResponse } from 'src/components/models/movie-response.model';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent {
  movieResponse$: Observable<MovieResponse>;
  queryParams$: Observable<any>;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.queryParams$ = this.activatedRoute.queryParams;
    this.setMovieResponse(this.activatedRoute.snapshot.queryParams.query, this.activatedRoute.snapshot.queryParams.page)
  }

  setMovieResponse(query: string, page: number): void {
    this.movieResponse$ = this.movieService.getMovies(query, page);
  }

  pageChange(page: number) {
  }
}
