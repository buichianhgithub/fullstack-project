import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { GuestScreenComponent } from './components/guest-screen/guest-screen.component';
import { AdminScreenComponent } from './components/admin-screen/admin-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'guest', component: GuestScreenComponent },
  { path: 'admin', component: AdminScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
