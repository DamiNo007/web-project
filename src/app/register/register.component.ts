import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../user.service'
import {User} from '../user'
import {Guest} from '../temp'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userName:string
  @Input() userLastName:string
  @Input() userEmail:string
  @Input() userPassword:string



  user:User
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    
  }
  
  createNewUser(){
    this.user = {
      id:null,
      firstName:this.userName,
      lastName:this.userLastName,
      email:this.userEmail,
      password:this.userPassword
    }

    this.userService.addUser(this.user)
    this.notification()
  }

  notification(){
    window.alert('New user ' + this.user.firstName +' was created!');
  }
}


