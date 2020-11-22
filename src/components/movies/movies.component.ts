import { QueryParams } from './../models/query-params.model';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { MovieResponse } from 'src/components/models/movie-response.model';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movieResponse$: Observable<MovieResponse>;
  queryParams: QueryParams = {
    page: 1,
    query: ''
  };

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.pipe(skip(1)).subscribe(params => {
      this.queryParams = {
        page: params.page || 1,
        query: params.query || ''
      }
    });
    // console.log('this.activatedRouteSnapshot.snapshot.paramMap', this.activatedRoute.snapshot.queryParamMap.get('query'));
    this.movieResponse$ = this.movieService.getTopRated();
  }



  keywordChange(query: string) {
    if (query && query.length >= 3)
      this.movieResponse$ = this.movieService.getAll(query);
    else {
      this.movieResponse$ = this.movieService.getTopRated(1);
    }
    this.queryParams.query = query;
    this.queryParams.page = 1;
  }

  pageChange(page: number) {
    if (this.queryParams.query && this.queryParams.query.length >= 3)
      this.movieResponse$ = this.movieService.getAll(this.queryParams.query, page);
    else {
      this.movieResponse$ = this.movieService.getTopRated(page);
    }
    this.queryParams.page = page;
  }
}
