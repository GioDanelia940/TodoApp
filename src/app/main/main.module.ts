import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ViewComponent } from './view/view.component';
import { TodoAreaComponent } from './components/todo-area/todo-area.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
@NgModule({
  declarations: [
    HeaderComponent,
    ViewComponent,
    TodoAreaComponent,
    TodoListComponent,
    TodoListItemComponent,
    NewTaskComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [ViewComponent],
})
export class MainModule {}
