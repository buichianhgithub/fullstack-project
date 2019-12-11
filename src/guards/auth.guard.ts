import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../app/services/authService/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor ( private router:Router,private authService:AuthService){

  }

  canActivate() {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
