import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Player } from 'src/app/player';
import { GameService } from 'src/app/services/gameService/game.service';



@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  id: String;
  players;
  games;

  constructor(public dialogRef: MatDialogRef<UpdatePlayerComponent>,
    private playerService: PlayerService,private gameService:GameService,
    private formBuilder: FormBuilder) {

  }

  fetchAllGames(){
    this.gameService.getAllGames().subscribe(data=>{
      this.games = data;
    })
  }

  updatePlayer(id,name,ranking,time,score,game,status){
    this.playerService.updatePlayer(id,name,ranking,time,score,game,status).subscribe(data=>{
      this.playerService.initializeFormGroup();
      this.closeDialog();
      console.log(id);
    });
    
  }

  ngOnInit() {
    this.fetchAllGames();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
