import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISignUpUser } from 'src/app/shared/modules/interfaces';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent{
    mySignupForm!: FormGroup;

    constructor(private _fb: FormBuilder, private _accountService: AccountService){
        this.mySignupForm = this._fb.group({
            fname: [null, [Validators.required]],
            lname: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            contact: [null, [Validators.required, Validators.maxLength(10)]],
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            branch: [null, [Validators.required]],
            role: [null, [Validators.required]],
            isChecked: [null, [Validators.required]]
        })
    }

    onSignupSubmit(){
        console.log(this.mySignupForm);
        
        if(this.mySignupForm.valid && this.mySignupForm.value.isChecked){
            let userData: ISignUpUser = {
                fname: this.mySignupForm.value.fname,
                lname: this.mySignupForm.value.lname,
                email: this.mySignupForm.value.email,
                contact: this.mySignupForm.value.contact,
                username: this.mySignupForm.value.username,
                password: this.mySignupForm.value.password,
                branch: this.mySignupForm.value.branch,
                role: this.mySignupForm.value.role
            }
            this._accountService.onSignup(userData).subscribe(res => {
                console.log(res);
                
            }, err => {
                console.log(err);
                
            });
        }
    }

    get isSignupValid(): boolean{
        if(this.mySignupForm.dirty && this.mySignupForm.touched && !this.mySignupForm.valid){
            return true;
        }
        return false;
    }
}