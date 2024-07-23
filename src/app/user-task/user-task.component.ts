import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { UserComponent } from "../user/user.component";
import { dummyTasks } from './taskcontent';
import { CommonModule } from '@angular/common';
export class taskset
{
  id?: string;
  userId?: string;
  title?: string;
  summary?: string;
  dueDate?: string;

}

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [UserComponent, CommonModule, TaskComponent],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {


  @Input() name!:string;
  @Input() userId!:string;
   Tasks = dummyTasks;
  get selectedUserTasks()
  {
    return this.Tasks.filter((task) => task.userId === this.userId)
  }

  getSummary() :string
  {

    for(const task of dummyTasks)
    {
      if(task.userId === this.userId)
          {
            return task.summary;
          }
    }
    return "no summary found"
  }
  onCompleteTask(id: string)
  {
    this.Tasks = this.Tasks.filter((task)=>task.id !== id);
  }
  checkTask(id: string) : boolean {

    return this.Tasks.some(task => task.userId === id);
  }





}
