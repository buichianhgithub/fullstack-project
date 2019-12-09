import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerService } from '../../services/playerService/player.service';
import { GameService } from 'src/app/services/gameService/game.service';
import { UpdatePlayerComponent } from './../admin-screen/updates/update-player/update-player.component';
import { CreatePlayerComponent } from './../admin-screen/updates/create-player/create-player.component';


@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  displayedColumnsForPT: string[] = ['name', 'ranking', 'time', 'score', 'status', 'game', 'update', 'delete'];
  displayedColumnsForGT: string[] = ['title', 'platform', 'genre', 'rating', 'publisher', 'release', 'status'];
  players;
  games;

  constructor(private playerService: PlayerService, private gameService: GameService, public dialog: MatDialog) { }

  ngOnInit() {
    this.fetchPlayers();
    this.fetchAllGames();
  }

  fetchAllGames() {
    this.gameService.getAllGames().subscribe((data) => {
      this.games = data;
    })
  }

  fetchPlayers() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.players = data;
    })
  }

  deletePlayer(id) {
    var players = this.players;
    this.playerService.deletePlayerById(id).subscribe((data) => {
      const itemIndex = this.players.findIndex(data => data._id === id);
      players.splice(itemIndex, 1);
      this.ngOnInit();
    })
  }

  // open dialog to show update component
  openDialogUpdatePlayer(): void {
    const dialogRef = this.dialog.open(UpdatePlayerComponent, {
      width: '900px',
      height: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed!!");
    });
  }

  // open dialog to show create component
  openDialogCreatePlayer(): void {
    const dialogRef = this.dialog.open(CreatePlayerComponent, {
      width: '900px',
      height: '600px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog closed!!");
    });
  }



}
