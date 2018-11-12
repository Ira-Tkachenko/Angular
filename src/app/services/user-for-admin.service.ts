import { Injectable } from '@angular/core';

@Injectable()
export class UserForAdminService {

  constructor() { }

  public data;

  public setData(data){
    this.data = data;
  }

  public getData(){
    return this.data;
  }

  public clearData(){
    this.data = undefined;
  }
}
