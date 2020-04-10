import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { News } from './news';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl = 'api/news';

  httOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl)
  }
}
