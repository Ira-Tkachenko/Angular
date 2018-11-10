import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User login', 'User list'];

  constructor() { }

  ngOnInit() {
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

}
