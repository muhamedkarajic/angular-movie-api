import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from 'src/components/models/movie-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getTopRated(page: number = 1) {
    return this.httpClient.get<MovieResponse>(
      `${environment.apiUrl}/movie/top_rated?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getAll(query: string, page: number = 1) {
    let endpoint = `${environment.apiUrl}/search/movie?api_key=${environment.apiKey}`;
    if (query) {
      endpoint += `&query=${query}`;
    }
    if (page > 0) {
      endpoint += `&page=${page}`;
    }
    return this.httpClient.get<MovieResponse>(endpoint);
  }

  getMovies(query: string, page: number) {
    console.log('function executed');
    if (query && query.length >= 3)
      return this.getAll(query, page > 0 ? page : 1);
    else {
      return this.getTopRated();
    }
  }
}
