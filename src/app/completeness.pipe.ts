import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task.model';

@Pipe({
    name: "completeness",
    pure: false
})


export class CompletenessPipe implements PipeTransform {
    transform(input: Task[], desiredCompleteness) {
        let output: Task[] = [];
        if(desiredCompleteness == "incompleteTasks"){
            for(let i = 0; i < input.length; i++){
                if(!input[i].done){
                    output.push(input[i]);
                }
            }
        }
        if(desiredCompleteness == "completedTasks"){
            for(let i = 0; i < input.length; i++){
                if(input[i].done){
                    output.push(input[i]);
                }
            }
        }
        if(desiredCompleteness == "allTasks"){
            output = input;
        }
        return output;
    }
}