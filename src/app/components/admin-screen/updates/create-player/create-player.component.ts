import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/gameService/game.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  players;
  games;
  createForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<CreatePlayerComponent>,
    private playerService: PlayerService,private gameService:GameService,
    private formBuilder: FormBuilder) {

// initialize form
   this.playerService.initializeFormGroup();
  }

  ngOnInit() {
    this.fetchPlayers();
    this.fetchAllGames();
  }

  
  addPlayer(name, ranking, time, score, game, status) {
    this.playerService.addPlayer(name, ranking, time, score, game, status).subscribe(data => {
      this.closeDialog();  
    })
  }


  fetchPlayers() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.players = data;
    })
  }

  fetchAllGames(){
    this.gameService.getAllGames().subscribe(data=>{
      this.games = data;
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
