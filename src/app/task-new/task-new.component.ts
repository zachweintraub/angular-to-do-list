import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor() { }

  @Output() sendTask = new EventEmitter();

  submitForm(description: string, priority: string, date: Date = new Date()) {

    this.sendTask.emit(new Task(description, date, parseInt(priority)));

  }

  ngOnInit() {
  }

}
