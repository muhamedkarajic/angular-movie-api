import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']

})
export class SearchComponent {
  @Input() placeholder: string;
  @Input() debounceTime: number = 1000;
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchInput: FormControl = new FormControl();

  constructor()
  {
    this.searchInput.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe(value => this.search.emit(value));
  }
}
