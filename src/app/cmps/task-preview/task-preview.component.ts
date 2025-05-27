import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

import { Task } from '../../models/task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'task-preview',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task-preview.component.html',
  styleUrl: './task-preview.component.css'
})
export class TaskPreviewComponent {
@Input({required: true}) task!: Task
@Output() complete = new EventEmitter<string>()
private tasksService = inject(TasksService)

onCompleteTask(){
  this.tasksService.removeTask(this.task.id)
}
}
