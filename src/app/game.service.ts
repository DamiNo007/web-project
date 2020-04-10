import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Game } from './game';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class GameService {
  private gamesUrl = 'api/games';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) { }

  getGames(category:String): Observable<Game[]> {
    if(category==="action"){
      this.gamesUrl = 'api/action_games';
    }
    else if(category==="shooters"){
      this.gamesUrl = 'api/shooters'
    }
    else if(category==="rpgs"){
      this.gamesUrl = 'api/rpgs'
    }

    else if(category==="online_games"){
      this.gamesUrl = 'api/online_games'
    }
    return this.http.get<Game[]>(this.gamesUrl);
  }




  searchGames(term:string):Observable<Game[]>{
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Game[]>(`${this.gamesUrl}/?name=${term}`).pipe(
    );
  }
}