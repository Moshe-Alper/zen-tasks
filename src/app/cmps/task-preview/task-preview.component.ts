import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-preview',
  standalone: true,
  imports: [],
  templateUrl: './task-preview.component.html',
  styleUrl: './task-preview.component.css'
})
export class TaskPreviewComponent {
@Input({required: true}) task!: Task

}
