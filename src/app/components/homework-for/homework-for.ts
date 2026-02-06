import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-homework-for',
  imports: [],
  templateUrl: './homework-for.html',
  styleUrl: './homework-for.css',
})
export class HomeworkFor {
  protected namehomeWork = signal("");
  protected homeworkList = signal<String[]>([]);

  save_homework(event: Event) {
    const hwInput = event.target as HTMLInputElement;
    this.namehomeWork.set(hwInput.value);
  }

  addHomework() {
    this.homeworkList.update((hm) => [...hm, this.namehomeWork()]);
  }
}
