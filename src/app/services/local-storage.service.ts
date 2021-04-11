import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  tokenKey: string = 'token';

  constructor() { }

  setToken(tokenValue: TokenModel) {
    localStorage.setItem(this.tokenKey, JSON.stringify(tokenValue));
  }

  getToken(): TokenModel {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
