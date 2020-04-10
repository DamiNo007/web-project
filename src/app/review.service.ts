import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ReviewService {
  private reviewsUrl = 'api/reviews';

  httOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) { }

  

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl)
  }
}