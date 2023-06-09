import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../../components/new-task/new-task.component';
import { HttpService } from '../../services/http.service';
import { State, Task, TaskParent } from '../../models/task.model';
import { Observable, Subscription, filter, of, switchMap } from 'rxjs';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  @Input() listName!: string;
  tasks!: Task[];
  sub!: Subscription;
  constructor(public http: HttpService, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.sub = this.http.dataUpdate
      .pipe(
        filter((resp: any) => resp == 'initial' || resp == this.listName),
        switchMap(() => this.http.getTasks(this.listName))
      )
      .subscribe((resp: any) => {
        this.tasks = resp;
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewTaskComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
