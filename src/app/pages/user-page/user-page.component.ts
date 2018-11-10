import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User information', 'Update user'];

  constructor(private currentUser: CurrentUserService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

  logOut() {
    this.currentUser.clearData();
    this.router.navigate(['/login']);
  }

}
