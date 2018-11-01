import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User information', 'Update user'];

  constructor() { }

  ngOnInit() {
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

}
