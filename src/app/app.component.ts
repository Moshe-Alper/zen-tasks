import { Component } from '@angular/core';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { UserComponent } from './cmps/user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
}
