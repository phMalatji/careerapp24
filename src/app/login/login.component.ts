import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { UserService } from '../shared/user.service';
import { UsersService } from '../shared/users.service';
import { IUser } from '../shared/AppInterfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
page:string="login";
  logForm: FormGroup;
  uEmail: FormControl;
  uPassword: FormControl;

  constructor(public userService:UsersService,
    private _router:Router) {
    this.uEmail = new FormControl("", [Validators.required]);
    this.uPassword = new FormControl("", [Validators.required]);

    this.logForm = new FormGroup({
      email: this.uEmail,
      password: this.uPassword
    });
  }

  ngOnInit() {
  }

  login() {
     const user = <IUser>(this.logForm.value);
    //window.localStorage.jwt=1234;
   this.userService.login(user).subscribe(
    data => {
      console.log(data.token);
      window.localStorage.jwt=data.token;
        //login
        console.log('route me')
        this._router.navigate(['/home']);
    },
    err => {
      console.log('info error bro');
      this.handleError(err);
      var feed = document.getElementById('feedback').innerHTML='<small>Insufficient Credentials</small>';
    }
   );

   
     
  }
  handleError(err){
    console.log(err)
  }

}
