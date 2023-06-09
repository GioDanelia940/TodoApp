import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { State, TaskParent } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  taskForm!: FormGroup;
  ngOnInit(): void {
    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.required),
    });
  }
  constructor(private http: HttpService, private dialog: MatDialog) {}
  onSubmit() {
    this.http
      .addTask(new TaskParent(this.taskForm.value.task, State.TODO), 'todo')
      .subscribe((resp) => {
        this.http.dataUpdate.next('todo');
      });
    this.dialog.closeAll();
  }
}
