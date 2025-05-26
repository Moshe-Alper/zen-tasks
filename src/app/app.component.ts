import { Component } from '@angular/core';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { UserComponent } from './cmps/user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from './cmps/tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
