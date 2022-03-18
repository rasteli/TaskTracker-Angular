import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/tasks`;

    const tasks = this.http.get<Task[]>(url);
    return tasks;
  }

  deleteTask(taskId: number | undefined): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${taskId}`;

    const deletedTask = this.http.delete<Task>(url);
    return deletedTask;
  }

  toggleReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    const updatedTask = this.http.put<Task>(url, task, httpOptions);
    return updatedTask;
  }
}
