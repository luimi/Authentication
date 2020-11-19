import { Injectable } from '@angular/core';
import Parse from 'parse';
@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor() { }
  public async logIn(phone) {
    try{
      return await Parse.Cloud.run('authentication-sms_generateCode',{phone});
    }catch(e){
      return {success:false, error:e};
    }
  }
  public async validate(phone,code){
    try{
      await Parse.User.logIn(phone, code.toString());
      return {success:true};
    }catch(e){
      return {success:false, error:e};
    }
  }
}
