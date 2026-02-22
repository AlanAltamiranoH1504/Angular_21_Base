import {Component, inject, signal} from '@angular/core';
import {PersonsService} from '../../services/persons/persons';
import {Person} from '../../types';
import {ListPersons} from './list-persons/list-persons';

@Component({
  selector: 'app-handle-persons-service',
  imports: [
    ListPersons
  ],
  templateUrl: './handle-persons-service.html',
  styleUrl: './handle-persons-service.css',
})
export class HandlePersonsService {
  private personsService = inject(PersonsService);
  public listPersons = signal<Person[]>([]);

  protected get_person() {
    this.personsService.getDataAPI().subscribe((res) => {
      this.listPersons.set(res);
    });
  }
}
