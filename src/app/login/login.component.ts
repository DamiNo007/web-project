import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../user.service'
import {User} from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email:string;
  @Input() password:string;
  userFullName:string;

  users:User[];
  constructor(private userSerivce:UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers():void{
    this.userSerivce.getUsers()
    .subscribe(users=>this.users=users); 
  }


  login(){
    for (let user of this.users){
      if(user.email.match(this.email)!=null && user.password.match(this.password)){
        this.userFullName = user.firstName + " " + user.lastName
        this.welcome()
      }
    }
  }


  welcome(){
    window.alert('Welcome, ' + this.userFullName +'!');
  }

}
