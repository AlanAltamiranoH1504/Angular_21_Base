import {Component, input} from '@angular/core';
import {Person} from '../../../types';

@Component({
  selector: 'app-list-persons',
  imports: [],
  templateUrl: './list-persons.html',
  styleUrl: './list-persons.css',
})
export class ListPersons {
  public persons = input.required<Person[]>();
}
