import { Component, Input } from '@angular/core';
import { TaskPreviewComponent } from '../task-preview/task-preview.component';
import { dummyTasks } from './../../data/dummy-tasks';
import { AddTaskComponent } from "../add-task/add-task.component";
import { NewTaskData } from '../../models/task.model';
@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskPreviewComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }
  
  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false
  }
}
