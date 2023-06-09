import { Injectable } from '@angular/core';
import { State, Task, TaskParent } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseURL: string = 'http://localhost:4000/';
  constructor(private http: HttpClient) {}
  dataUpdate: BehaviorSubject<string> = new BehaviorSubject<string>('initial');
  getTasks(url: string) {
    return this.http.get(`${this.baseURL}${url}`);
  }
  addTask(task: TaskParent, listName: string) {
    return this.http.post(`${this.baseURL}${listName}`, task);
  }
  deleteTask(id: number, state: State) {
    return this.http.delete(`${this.baseURL}${state}/${id}`);
  }
}
