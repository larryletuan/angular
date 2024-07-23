import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserTaskComponent } from '../user-task.component';
import { dummyTasks } from '../taskcontent';

interface Tasks
{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UserTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})



export class TaskComponent {

 @Input() task!:Tasks;
 @Output() complete = new EventEmitter<string>();
 onCompleteTask()
 {
  this.complete.emit(this.task.id);
 }
 TasksNew = dummyTasks;
 onCompleteTaskNew(id : string)
 {
  this.TasksNew = this.TasksNew.filter((task)=>task.id !== id);
 }


}
