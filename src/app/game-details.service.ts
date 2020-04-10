import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Game } from './game';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {
  private gamesUrl = 'api/games';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  game:Game

  constructor(private http:HttpClient) { }


  public initializeGame(game : Game) : void{
    this.game = game;
  }

  public returnGame() : Game{
    return this.game;
  }

  updateGame (game: Game): Observable<any> {
    if(game.category=="action_games"){
      this.gamesUrl = 'api/action_games';
    }
    if(game.category=="shooters"){
      this.gamesUrl = 'api/shooters';
    }
    if(game.category=="rpgs"){
      this.gamesUrl = 'api/rpgs';
    }
    if(game.category=="online_games"){
      this.gamesUrl = 'api/online_games';
    }
    return this.http.put(this.gamesUrl, game, this.httpOptions)
  }
}
