import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchInput = new BehaviorSubject<string>('');
  currentSearchInput$ = this.searchInput.asObservable();

  updateSearchInput(filterValue: string) {
    this.searchInput.next(filterValue);
  }
}
