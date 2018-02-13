import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';

import { UsersService } from '../shared/users.service';
import { IUser } from '../shared/AppInterfaces';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  page: string = "login";
  logForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;

  constructor(public userService: UsersService,
    private toast: ToastrService,
    private _router: Router) {


    this.uEmail = new FormControl("", [Validators.required]);
    this.uPassword = new FormControl("", [Validators.required]);

    this.logForm = new FormGroup({
      email: this.uEmail,
      password: this.uPassword
    });
  }

  ngOnInit() {
    // this.userService.getUsers().subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
  }

  login() {
    let user = <IUser>(this.logForm.value);
    //window.localStorage.jwt=1234;
  //  let body = JSON.stringify(user);
    console.log('oi');

    let success:boolean=false;
    this.userService.login(this.uEmail.value, this.uPassword.value).subscribe(
      data => {
     console.log(data);

     if(data){
       success=true;
       window.localStorage.jwt = data["token"];
      
       this.toast.success('Logged in');
       this._router.navigate(['/home']);
     }
     else{
       console.log('err')
      this.toast.error('Invalid Credentials' ,'Login failed', {
        timeOut: 1000,
      });

     }
    //   //  
    //     //login
    //     console.log('route me')
    //     this._router.navigate(['/home']);
     },
     err => {
      this.toast.error('Please check your credentials', 'Login Failed', {
        timeOut: 3000,
      });
         this.handleError(err);
   
    //   }
      });



  }
 


  handleError(err) {
    console.log(err)
  }

}
