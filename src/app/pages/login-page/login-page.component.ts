import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  //users: User[];

  constructor(public userService: UsersService) { }

  //users = this.userService.getUsers();

  ngOnInit() {
  	//console.log(this.users);
  }

}
