import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../services/user';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  //data = this.currentUser.getData(); 

  constructor(private currentUser: CurrentUserService) { }

  ngOnInit() {
    console.log(this.currentUser.getData()); 
  }

  click(){
    console.log(this.currentUser.getData()); 
  }

}
