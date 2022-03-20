import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../../mock-tasks';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  date!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  @Output() submit: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((bool) => (this.showAddTask = bool));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) return;

    const task: Task = {
      text: this.text,
      day: this.date,
      reminder: this.reminder,
    };

    this.submit.emit(task);
    this.clearForm();
  }

  clearForm(): void {
    this.text = '';
    this.date = '';
    this.reminder = false;
  }
}
