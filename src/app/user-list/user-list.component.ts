import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl } from '@angular/forms';
import { User } from '../services/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  inFocus: boolean = false;
  notInFound: boolean;

  user: User;
  users: User[];

  nameOfUser: FormControl;
  rotate: boolean;

  constructor(public userService: UsersService) { }

  ngOnInit() { 
    this.nameOfUser = new FormControl('');
  }

  addUserList(rotate: boolean) {
    this.rotate = rotate;
  }

  InputInFocus() {
    this.getAllUsers();

    this.notInFound = false;
    this.inFocus = true;

    this.users = [];
  }

  getAllUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => 
        this.users = users
      );
  }

  searchUsers() {
    this.userService.getUsersByName(this.nameOfUser.value)
    .subscribe((users: User[]) => 
      this.users = users,
      () => {
        this.notInFound = true;
        this.users = [];
      }
    );
  }
  
  UserSelected(user: User) {  
    this.inFocus = false;
    this.user = user;
  }

}
