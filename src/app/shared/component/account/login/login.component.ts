import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginError, ILoginUser } from 'src/app/shared/models/interfaces';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent{
    loginError!: Array<ILoginError>;
    constructor(private _accountService: AccountService, private _router: Router){}

    onLoginSubmit(form: NgForm){
        if(form.value.isChecked === true && form.valid){
            let userData: ILoginUser = {
                email: form.value.email,
                password: form.value.password,
                returnSecureToken: true
            }
            this._accountService.onLogin(userData).subscribe(res => {
                console.log(res);
            }, err => {
                console.log(err);
                this.loginError = err.error.error.errors;
            });
        }
    }
}