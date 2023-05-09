import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAccountRes, ILoginUser, ISignUpUser } from '../models/interfaces';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from '../component/account/user.model';

@Injectable({
    providedIn: 'root'
})

export class AccountService{
    private _apiKey: string = 'AIzaSyCkWzSshHF0tPhxLjGBV9Jafg1jX2WJnvw';
    user: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
    constructor(private _http: HttpClient){}

    onLogin(data: ILoginUser): Observable<IAccountRes>{
        let url: string = environment.loginUrl + this._apiKey;
        return this._http.post<IAccountRes>(url, data).pipe(tap(resData => {
            const expirationData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
            const user = new UserModel(resData.email, resData.localId, resData.idToken, expirationData);
            this.user.next(user);
        }));
    }

    onSignup(data: ISignUpUser): Observable<IAccountRes>{
        let url: string = environment.signUpUrl + this._apiKey;
        return this._http.post<IAccountRes>(url, data);
    }
}