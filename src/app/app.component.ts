import { Component } from '@angular/core';
import { AppHeaderComponent } from "./cmps/app-header/app-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
