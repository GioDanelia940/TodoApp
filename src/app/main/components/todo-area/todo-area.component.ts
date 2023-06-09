import { Component } from '@angular/core';
import {} from '@angular/material/dialog';
@Component({
  selector: 'app-todo-area',
  templateUrl: './todo-area.component.html',
  styleUrls: ['./todo-area.component.scss'],
})
export class TodoAreaComponent {
  listNames: string[] = ['todo', 'progress', 'done'];
}
