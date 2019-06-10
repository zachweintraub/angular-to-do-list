import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  currentFocus: string = "Stay Focused Yo";
  currentDate = new Date();
  month: number = this.currentDate.getMonth() + 1;
  day: number = this.currentDate.getDate();
  year: number = this.currentDate.getFullYear();

  tasks: Task[] = [
    new Task("Get a job you hobo", new Date(2019,5,14)),
    new Task("Eat Lunch", new Date(2109,5,10)),
    new Task("Take a nap", new Date(2019,5,10))
  ] 
  
}


