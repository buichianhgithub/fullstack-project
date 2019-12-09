import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from '../../services/playerService/player.service';

@Component({
  selector: 'app-guest-screen',
  templateUrl: './guest-screen.component.html',
  styleUrls: ['./guest-screen.component.css']
})
export class GuestScreenComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'ranking', 'time', 'score', 'status', 'game', 'action'];
  constructor(private playerService: PlayerService, public dialog: MatDialog) { }
  players;
  ngOnInit() {
    this.fetchPlayers();
  }


  fetchPlayers() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.players = data;
    })
  }


  

}
