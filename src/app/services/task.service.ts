import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get<Task[]>(this.apiUrl);
    return tasks;
  }

  deleteTask(taskId: number | undefined): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;

    const deletedTask = this.http.delete<Task>(url);
    return deletedTask;
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    const updatedTask = this.http.put<Task>(url, task, httpOptions);
    return updatedTask;
  }
}
