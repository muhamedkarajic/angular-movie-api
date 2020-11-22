import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() placeholder: string;
  @Input() target: string;
  @Input() debounceTime: number = 1000;
  @Input() defaultValue: string;
  @Output() search: EventEmitter<string> = new EventEmitter();
  searchInput: FormControl = new FormControl();
  searchInputSubscription: Subscription;

  ngOnInit(): void {
    this.searchInput.setValue(this.defaultValue);
    this.searchInputSubscription = this.searchInput.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => {
        this.search.emit(value);
      });
  }
  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }
}
