import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  uri = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getAllGames(){
    return this.http.get(`${this.uri}/games`);
  }
}
