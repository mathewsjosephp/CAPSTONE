import { Component, OnInit } from '@angular/core';
import { OTPComponent } from '../otp/otp.component'
import { NgForm } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']

})
export class ForgotPasswordComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  submitForgotForm(form: NgForm) {
    console.log(form.value.email);
    console.log("Verifying")
    this.onGen()
  }
  onGen(){
    console.log ("This is happening")
    this.dialog.open(OTPComponent);
  }
  ngOnInit() {
  }
}
