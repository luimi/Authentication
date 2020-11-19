import { Injectable } from '@angular/core';
import Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class CompactService {

  constructor() { }
  public async logIn(data) {
    try {
      await Parse.User.logIn(data.user, data.password);
      return { success: true };
    } catch (e) {
      return { success: false, error: e };
    }
  }
  public async createUser(data, callback) {
    try {
      return await Parse.Cloud.run("authentication-compact_createUser", { username: data.username, name: data.name });
    } catch (e) {
      return { success: false, error: e };
    }
  }
  public async changePassword(newPassword) {
    const user = Parse.User.current();
    user.setPassword(newPassword);
    user.set("changePassword", false);
    try{
      await user.save();
      return {success:true};
    }catch(e){
      return {success:false, error:e};
    }
  }
  public async resetPassword(username, callback){
    try{
      return await Parse.Cloud.run("authentication-compact_resetUserPassword", { username:username});
    }catch(e){
      return {success:false};
    }
  }
}
