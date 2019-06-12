import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './models/task.model';

@Pipe({
    name: "priority",
    pure: false
})


export class PriorityPipe implements PipeTransform {
    transform(input: Task[], desiredPriority) {
        let output: Task[] = [];
        if(desiredPriority == "highPriority"){
            for(let i = 0; i < input.length; i++){
                if(input[i].priority == 1){
                    output.push(input[i]);
                }
            }
        }
        if(desiredPriority == "mediumPriority"){
            for(let i = 0; i < input.length; i++){
                if(input[i].priority == 2){
                    output.push(input[i]);
                }
            }
        }
        if(desiredPriority == "lowPriority"){
            for(let i = 0; i < input.length; i++){
                if(input[i].priority == 3){
                    output.push(input[i]);
                }
            }
        }
        if(desiredPriority == "allPriorities"){
            output = input;
        }
        return output;
    }
}