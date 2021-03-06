import { Component, OnInit } from '@angular/core';

import { Task } from '../../mock-tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(taskId: number | undefined): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }

  onSubmitTask(task: Task): void {
    this.taskService
      .createTask(task)
      .subscribe((task) => this.tasks.push(task));
  }
}
