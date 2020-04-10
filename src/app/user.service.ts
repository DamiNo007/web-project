import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './user'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private userUrl = 'api/users'

  users:User[]

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.userUrl)
  }

  genUserId():number{
    this.getUsers()
    .subscribe(users=>this.users = users)
  
    return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.userUrl, user, this.httpOptions).pipe()
  }

  updateUser(user:User):Observable<any>{
    return this.http.put(this.userUrl, user, this.httpOptions)
  }

  deleteUser(user:User | number):Observable<User>{
    const id = typeof user === 'number'?user:user.id;
    const url = `${this.userUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions)
  }
}


