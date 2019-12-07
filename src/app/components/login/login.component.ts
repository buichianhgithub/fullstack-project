import { Component, OnInit } from '@angular/core';
import { User } from '../../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  model = new User(0,"admin","password");
  constructor() { }

  ngOnInit() {
    
  }
  onSubmit(){
    this.submitted = true;
  }

}
