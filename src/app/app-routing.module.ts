import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GuestScreenComponent } from './components/guest-screen/guest-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'guest', component: GuestScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
