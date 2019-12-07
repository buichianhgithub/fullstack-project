import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  displayedColumns: string[] = ['name','ranking','score','unavailable','game','update','delete'];
  players;
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe((foundPlayers) =>{
      console.log(foundPlayers);
      this.players = foundPlayers;
    });
  }



}
