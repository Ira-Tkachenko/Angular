import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public idSelect: number;
  public arrayTabs: string[] = ['User login', 'Data'];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  public chandeTad(id: number): void {
    this.idSelect = id
  }

  switchLanguage(event) {
    this.translate.use(event.target.value);
  }

}
