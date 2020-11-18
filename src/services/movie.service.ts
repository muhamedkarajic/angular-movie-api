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




}
