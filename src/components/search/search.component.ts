import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, skip, take } from 'rxjs/operators';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  @Input() target: string;
  @Input() debounceTime: number = 1000;
  @Input() defaultValue: string;
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchInput: FormControl = new FormControl();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.searchInput.setValue(this.defaultValue);

    // if (this.target)
    //   this.activatedRoute.queryParams
    //     .pipe(skip(1), take(1))
    //     .subscribe((p) => this.searchInput.setValue(p[this.target]));
    // this.searchInput.valueChanges
    //   .pipe(debounceTime(this.debounceTime))
    //   .subscribe((value) => {
    //     this.search.emit(value);
    //   });
  }
}
