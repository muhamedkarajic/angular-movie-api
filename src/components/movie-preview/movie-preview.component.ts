import { Movie } from './../models/movie.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.scss'],
})
export class MoviePreviewComponent {
  @Input() movie: Movie;
}
