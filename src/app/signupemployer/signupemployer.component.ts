import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PROVINCES } from '../shared/constants';
@Component({
  selector: 'app-signupemployer',
  templateUrl: './signupemployer.component.html',
  styleUrls: ['./signupemployer.component.scss']
})
export class SignupemployerComponent implements OnInit {
  provinces:string[]=PROVINCES;
  signupForm: FormGroup;
  cName: FormControl;
  cEmail: FormControl;
  cPassword: FormControl;
  cSector: FormControl;
  cLocation: FormControl;


  constructor() {
    this.cName = new FormControl("", [Validators.required]);
    this.cEmail = new FormControl("", [Validators.required]);
    this.cPassword = new FormControl("", [Validators.required]);
    this.cSector = new FormControl("", [Validators.required]);
    this.cLocation = new FormControl("", [Validators.required]);



    this.signupForm = new FormGroup({
   
      email:this.cEmail,
      password:this.cPassword,
      name:this.cName,
      location:this.cLocation,
      sector:this.cSector

    });

   }

  ngOnInit() {
  }

}
