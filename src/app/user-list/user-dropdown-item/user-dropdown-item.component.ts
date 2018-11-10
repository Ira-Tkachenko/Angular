import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-dropdown-item',
  templateUrl: './user-dropdown-item.component.html',
  styleUrls: ['./user-dropdown-item.component.scss']
})
export class UserDropdownItemComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() { }

}
