import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  form:FormGroup = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl('', Validators.required),
    ranking: new FormControl('', Validators.required),
    time: new FormControl(''),
    score: new FormControl(''),
    game: new FormControl(''),
    status: new FormControl('',Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      _id: null,
      name: '',
      ranking: '',
      time: '',
      score: '',
      game: '',
      status:''
    });
  }

  populateForm(player) {
    this.form.setValue(player);
  }





  getAllPlayers() {
    return this.http.get(`${this.uri}/players`);
  }

  deletePlayerById(id) {
    return this.http.delete(`${this.uri}/players/${id}`);
  }

  addPlayer(name, ranking, time, score, game, status) {
    const player = {
      name: name,
      ranking: ranking,
      time: time,
      score:score,
      game: game,
      status: status
    }
    return this.http.post(`${this.uri}/players`, player);
  }

  updatePlayer(id,name, ranking, time, score, game, status) {
    const player = {
      name: name,
      ranking: ranking,
      time: time,
      score:score,
      game: game,
      status: status
    }
    return this.http.put(`${this.uri}/players/${id}`, player);
  }

  getPlayerById(id){
    return this.http.get(`${this.uri}/players/${id}`);
  }

}
