import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  private categoriesUrl = 'api/categories';

  httOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }
  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }
}