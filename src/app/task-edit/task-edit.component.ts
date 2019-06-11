import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor() { }

  @Input() childSelectedTask: Task;
  @Output() clickSender = new EventEmitter();

  saveButtonClicked() {
    this.clickSender.emit(null);
  }


  ngOnInit() {
  }

}
