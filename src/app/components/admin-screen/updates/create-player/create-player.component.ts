import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatePlayerComponent>,private playerService:PlayerService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  updatePlayer(){
    this.closeDialog();
    console.log("Player updated!!")
  }
}
