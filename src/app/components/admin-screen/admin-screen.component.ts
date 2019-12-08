import { Component, OnInit, ɵPlayer } from '@angular/core';
import { PlayerService } from '../../services/playerService/player.service';
import { DataSource } from '@angular/cdk/table';
import { Player } from 'src/app/player';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  displayedColumns: string[] = ['name', 'ranking', 'score', 'unavailable', 'game', 'update', 'delete'];
  players;

  constructor(private playerService: PlayerService) {  }

  ngOnInit() {
    this.fetchPlayers();
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




}
