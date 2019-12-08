import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  uri = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAllPlayers(){
    return this.http.get(`${this.uri}/players`);
  }


  deletePlayerById(id){
    return this.http.delete(`${this.uri}/players/${id}`);
  }
}
