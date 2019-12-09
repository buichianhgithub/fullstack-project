import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../services/playerService/player.service';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<JoinGameComponent>,private playerService:PlayerService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  joinGame(){
    this.closeDialog();
    console.log("Player updated!!")
  }
}
