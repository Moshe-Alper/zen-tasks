import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

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

onCompleteTask(){
  this.complete.emit(this.task.id)
}
}
