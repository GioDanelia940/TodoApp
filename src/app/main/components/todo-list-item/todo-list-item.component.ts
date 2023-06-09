import { Component, Input } from '@angular/core';
import {
  faCheck,
  faHourglass,
  faTrash,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { HttpService } from '../../services/http.service';
import { State, Task, TaskParent } from '../../models/task.model';
import { concatMap, tap } from 'rxjs';
@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  faList = faList;
  faCheck = faCheck;
  faHourglass = faHourglass;
  faTrash = faTrash;
  States: State[] = [State.TODO, State.PROGRESS, State.DONE];
  @Input() task!: Task;
  @Input() listName!: string;
  constructor(private http: HttpService) {}
  changeList(state: State) {
    this.http
      .addTask(new TaskParent(this.task.text, state), state)
      .pipe(
        tap(() => this.http.dataUpdate.next(state)),
        concatMap(() => this.http.deleteTask(this.task.id, this.task.state))
      )
      .subscribe(() => {
        this.http.dataUpdate.next(this.task.state);
      });
  }
  deleteItem() {
    this.http.deleteTask(this.task.id, this.task.state).subscribe(() => {
      this.http.dataUpdate.next(this.task.state);
    });
  }
}
