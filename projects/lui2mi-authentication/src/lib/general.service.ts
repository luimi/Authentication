import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  async logOut(){
    try{
      await Parse.User.logOut();
    }catch(e){}
  }
}
