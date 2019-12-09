import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from './../../../../services/playerService/player.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Player } from 'src/app/player';



@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  id: String;
  players;
  updateForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UpdatePlayerComponent>,
    private playerService: PlayerService,
    private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:Player) {

      this.updateForm = this.formBuilder.group({
        name: ['', Validators.required],
        ranking: ['', Validators.required],
        time: '',
        score: '',
        game: '',
        status: ['', Validators.required]
      });
  }

  updatePlayer(name,ranking,time,score,game,status){
    
  }

  ngOnInit() {

  }

  closeDialog() {
    this.dialogRef.close();
  }


}
