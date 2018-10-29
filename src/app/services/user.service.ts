/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import {FullUser} from '../models';
import { RestApiService } from './utils/rest-api.service';
import { PathConfig } from '../../app-config';
import { TokenService } from './token.service';
import { UserParserService } from './user-parser.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private user: BehaviorSubject<FullUser>;

  constructor(
    private restApiService: RestApiService,
    private router: Router,
  ) {
    this.user = new BehaviorSubject<FullUser>(null);
    this.updateUser();
  }

  public getUser(): BehaviorSubject<FullUser> {
    return this.user;
  }

  public updateUser(): void {
    const token = TokenService.getToken();
    if (token && TokenService.checkToken(token)) {
      const userId = TokenService.decodeToken(token).id;
      if (userId) {
        this.restApiService
          .getItems(`${PathConfig.FullUserEndpoint}${userId}`)
          .first()
          .subscribe((user) => {
            this.user.next(
              UserParserService.parserUser(user.json())
            );
          });
      }
    } else {
      this.user.next(null);
    }
  }

  public updateUserProfile (user: FullUser) {
    return new Observable( (observer) => {
      const token = TokenService.getToken();
      const userId = TokenService.decodeToken(token).id;

      this.restApiService.updateItem(PathConfig.UpdateUserEndpoint,
        userId,
        UserParserService.UserToJson(user)
      ).first()
        .subscribe((res) => {
          observer.next(res);
        });
    });
  }

  public getUserById(id: string): Observable<FullUser> {
    return this.loadUser(PathConfig.UserEndpoint + id);
  }

  public getFullUserById(id: string): Observable<FullUser> {
    return this.loadUser(PathConfig.FullUserEndpoint + id);
  }

  private loadUser(url: string): Observable<any> {
    return new Observable( (observer) => {
      this.restApiService.getItems(url)
        .first()
        .subscribe((user) => {
          observer.next( UserParserService.parserUser(user.json()));
        });
    });
  }

  public logoutUser() {
    TokenService.removeToken();
    this.user.next(null);
    this.router.navigate([`/${PathConfig.login}`]);
  }
}*/
