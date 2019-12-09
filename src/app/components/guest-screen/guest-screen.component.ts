import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from '../../services/playerService/player.service';
import { UpdatePlayerComponent } from './../admin-screen/updates/update-player/update-player.component';
import { JoinGameComponent } from './join-game/join-game.component';

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

// open dialog to show update component
openDialogUpdatePlayer(): void {
  const dialogRef = this.dialog.open(JoinGameComponent, {
    width: '900px',
    height: '600px',
    disableClose: true,
    
  });

  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
}
  

}
