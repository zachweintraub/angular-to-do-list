import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(task: Task) {
    this.clickSender.emit(task);
  }

  setColor(task: Task) {
    if(task.priority == 1) {
        return 'priority-high';
    }
    if(task.priority == 2) {
        return 'priority-medium';
    }
    if(task.priority == 3) {
        return 'priority-low';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
