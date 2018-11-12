import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User list', 'Edit user', 'Add user', 'Delete user'];

  constructor() { }

  ngOnInit() {
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

}
