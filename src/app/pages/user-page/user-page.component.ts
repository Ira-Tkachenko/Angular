import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../services/current-user.service';
import { UserForAdminService } from '../../services/user-for-admin.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User information', 'Update user', 'User list'];
  user: User; 
  adminRole: boolean = false;

  constructor(private currentUser: CurrentUserService,
              private router: Router,
              private translate: TranslateService,
              private userForAdminService: UserForAdminService
  ) { }

  ngOnInit() {
    if (this.currentUser.getData()) {
      this.user = this.currentUser.getData(); 
    } else {
      alert('You should login!');
      this.user = {};
    }
    
    if (this.user.role == 'admin') {
      this.adminRole = true;
    } else {
      this.arrayTabs.pop();
    }
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

  logOut() {
    this.currentUser.clearData();
    this.userForAdminService.clearData();
    this.router.navigate(['/login']);
  }

  switchLanguage(event) {
    this.translate.use(event.target.value);
  }

}
