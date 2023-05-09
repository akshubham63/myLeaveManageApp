import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  myReasonForm!: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myReasonForm = this._fb.group({
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]],
      reason: [null, [Validators.required]]
    })
  }

  onReasonSubmit(){
    if(this.myReasonForm.valid){
      console.log(this.myReasonForm);
    }
  }
}
