import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  players;
  createForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<CreatePlayerComponent>,
    private playerService: PlayerService,
    private formBuilder: FormBuilder) {

// initialize form
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      ranking: ['', Validators.required],
      time: '',
      score: '',
      game: '',
      status: ['', Validators.required]

    });
  }

  ngOnInit() {
    this.fetchPlayers()
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

  closeDialog() {
    this.dialogRef.close();
  }

}
