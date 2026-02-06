import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-local-reference',
  imports: [],
  templateUrl: './local-reference.html',
  styleUrl: './local-reference.css',
})
export class LocalReference {
  protected homework = signal("");

  addHomework(event: Event) {
    const homeworkInput = event.target as HTMLInputElement;
    this.homework.set(homeworkInput.value);
  }

  showHomework() {
    return this.homework();
  }
}
