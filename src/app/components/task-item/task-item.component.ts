import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
