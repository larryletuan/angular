import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AnalysicFormComponent } from './analysic-form/analysic-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homes', pathMatch: 'full' },
  { path: 'users', component: UserComponent },  // Ensure you have a UsersComponent for the list
  { path: 'analysis', component: AnalysicFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
