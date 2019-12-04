import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-screen',
  templateUrl: './guest-screen.component.html',
  styleUrls: ['./guest-screen.component.css']
})
export class GuestScreenComponent implements OnInit {
  isShowLogin = false;
  isShowTable = true;
  constructor() { }

  ngOnInit() {
  }

  DisplayLogin(){
    this.isShowLogin = !this.isShowLogin;
  }
  DisplayTable(){
    this.isShowTable = !this.isShowTable;
  }

}
