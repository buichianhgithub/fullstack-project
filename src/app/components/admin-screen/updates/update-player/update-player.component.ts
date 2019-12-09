import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatePlayerComponent>,private playerService:PlayerService) {

  }

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
