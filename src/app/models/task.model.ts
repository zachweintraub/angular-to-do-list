import { AppComponent } from './../app.component';

export class Task{
    public done: boolean = false;
    constructor(public description: string, public dueDate: Date, public priority: number) { }
    

    edit(){
        return;
    }

    setColor(){
        if(this.priority == 1){
            return "priority-high";
        }
        if(this.priority == 2){
            return "priority-medium";
        }
        if(this.priority == 3){
            return "priority-low";
        }
    }

}