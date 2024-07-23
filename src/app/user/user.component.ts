import { Component, EventEmitter, Input, Output } from '@angular/core';

//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get ImagePathUser()
  // {
  //   return 'assets/users/'+ DUMMY_USERS[randomIndex].avatar;
  // }


  @Input( {required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  @Input() id!:string;
  @Output() select = new EventEmitter();


  get imagePath()
  {
    console.log(this.avatar);
    return 'assets/users/' + this.avatar;
  }


  onSelectedUser()
  {

  // const randomIndex =  Math.floor(Math.random()*DUMMY_USERS.length);
  // console.log(this.selectedUser.name);
     // alert(this.name);
      this.select.emit(this.id);
   //this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }


}
