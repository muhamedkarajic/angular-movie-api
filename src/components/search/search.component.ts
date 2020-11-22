import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, skip, take } from 'rxjs/operators';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() target: string;
  @Input() debounceTime: number = 1000;
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchInput: FormControl = new FormControl();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    if (this.target)
      this.activatedRoute.queryParams
        .pipe(skip(1), take(1))
        .subscribe((p) => this.searchInput.setValue(p.query));

    this.searchInput.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.search.emit(value);
        //set query params
      });
  }
}
