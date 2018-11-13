import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserForAdminService } from '../../services/user-for-admin.service';
import { User } from '../../services/user';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit, DoCheck {
	user: User;
	userId: number;
	canDelete: boolean;

  constructor(public userService: UsersService,
  						public userForAdminService: UserForAdminService,
              public translate: TranslateService
  ) { }

  ngOnInit() {
  	this.userForAdminService.clearData();
  	this.canDelete = true;
  }

  ngDoCheck() {
  	if (this.userForAdminService.getData()) {
  		this.canDelete = false;
  		this.userId = this.userForAdminService.getData().id;
  		console.log(this.userId);
  	} else {
  		this.canDelete = true;
  	}
  }

  deleteUser() {
  	this.userService.deleteUser(this.userId)
  		.subscribe((data: User) => {
        if (data) {
          this.userForAdminService.clearData();
          this.translate.get('The user successfully deleted.').subscribe((res: string) => {
            alert(res);
          });
        } else {
          alert('User not found.');
        }
      });
  }

}
