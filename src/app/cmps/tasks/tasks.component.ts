import { Component, Input } from '@angular/core'
import { TaskPreviewComponent } from '../task-preview/task-preview.component'
import { dummyTasks } from './../../data/dummy-tasks'
import { AddTaskComponent } from "../add-task/add-task.component"
import { NewTaskData } from '../../models/task.model'
import { TasksService } from '../../services/tasks.service'
@Component({
  selector: 'tasks',
  standalone: true,
  imports: [TaskPreviewComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddingTask = false


  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCloseAddTask() {
    this.isAddingTask = false
  }
}
