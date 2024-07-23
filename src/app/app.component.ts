import { Component} from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DUMMY_USERS } from './dummy.user';
import { UserTaskComponent } from './user-task/user-task.component';
import { CommonModule } from '@angular/common';
import { AnalysicFormComponent } from "./analysic-form/analysic-form.component";
import { TaskComponent } from './user-task/task/task.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HeaderComponent, UserTaskComponent, CommonModule, AnalysicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  users = DUMMY_USERS;

  selectedID?:string;
  currentForm?:string;

  onSelectedUser(id:string)
  {
    this.selectedID = id;
    if(id ==='u7')
    {
      this.currentForm="form-tuyensinh";
    }
    else
    {
      this.currentForm = '';
    }
  }
  get userName()
  {

    return this.users.find((user) => user.id === this.selectedID)!

  }
  navigateTo(form: string) {
    this.currentForm = form;
  }


}
