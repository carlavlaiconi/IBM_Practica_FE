import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public membersOfTeam: any[] = [];
  public value: any;
  public member: any;
  selected = 'option2';
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterChanged.emit(filterValue.trim().toLowerCase());
  }

   myControl = new FormControl('');
  options: string[] = ['john.doe@example.com','jane.doe@example.com','bob.smith@example.com','alice.johnson@example.com','charlie.brown@example.com'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  clearForm() { 
    this.membersOfTeam.push(this.member);
    this.member = ""; }
}


