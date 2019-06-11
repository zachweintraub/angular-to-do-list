import { AppComponent } from './../app.component';

export class Task{
    public done: boolean = false;
    constructor(public description: string, public dueDate: Date, public priority: number) { }



}