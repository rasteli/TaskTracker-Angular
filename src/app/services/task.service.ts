import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TASKS, Task } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(`${this.apiUrl}/tasks`);
    return tasks;
  }
}
