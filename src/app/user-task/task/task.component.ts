import { Component, Input } from '@angular/core';
import { UserTaskComponent } from '../user-task.component';

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


}
