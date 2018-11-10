import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-chosen',
  templateUrl: './user-chosen.component.html',
  styleUrls: ['./user-chosen.component.scss']
})
export class UserChosenComponent implements OnInit {
  @Input() user: User;
  @Output('addList') addListEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  rotate: boolean = false;

  constructor() {}

  ngOnInit() {
    this.addListEvent.emit(this.rotate);
  }

  addUserList() {
    this.rotate = !this.rotate;
    this.addListEvent.emit(this.rotate);
  }

}
