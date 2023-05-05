import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAccountRes, ILoginUser } from '../modules/interfaces';

@Injectable({
    providedIn: 'root'
})

export class AccountService{
    private _apiKey: string = 'AIzaSyCkWzSshHF0tPhxLjGBV9Jafg1jX2WJnvw';
    constructor(private _http: HttpClient){}
    onLogin(data: ILoginUser){
        let url: string = environment.loginUrl + this._apiKey;
        return this._http.post<IAccountRes>(url, data);
    }
}