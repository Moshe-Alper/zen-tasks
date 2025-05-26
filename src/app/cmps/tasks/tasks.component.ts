import { Component, Input } from '@angular/core';
import { TaskPreviewComponent } from "../task-preview/task-preview.component";
import { dummyTasks } from './../../data/dummy-tasks'
@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskPreviewComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string 
  @Input({required: true}) name!: string 
  tasks = dummyTasks

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id )
  }
}
