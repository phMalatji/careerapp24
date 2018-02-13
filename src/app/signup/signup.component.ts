import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  uName: FormControl;
  uSurname: FormControl;
  uEmail: FormControl;
  uSkills: FormControl;
  uQuali: FormControl;
  uPassword: FormControl;
  listSkills:number=0;

  constructor(public userService: UsersService, 
       private toast: ToastrService,
      private router:Router) { 

    this.uName = new FormControl("", [Validators.required]);
    this.uSurname = new FormControl("", [Validators.required]);
    this.uPassword = new FormControl("", [Validators.required]);

    this.uEmail = new FormControl("", [Validators.required]);
    this.uQuali = new FormControl("", [Validators.required]);


    this.uSurname = new FormControl("", [Validators.required]);
    this.signupForm = new FormGroup({
   
      email:this.uEmail,
      password:this.uPassword,
      qualification:this.uQuali
    });

  }

  ngOnInit() {
  }

    signup(){
    //  console.log(this.signupForm.value);
      this.userService.signup(this.signupForm.value).subscribe(
        data => {
          console.log(data)
          this.toast.success('Please login' ,'Success', {
            timeOut: 1000,
          });

          let self = this;
          setTimeout(function(){ 
            self.router.navigate(['/login']);
          }, 2000);
       
        },
        err => {
          console.log('cant log'+ err);
          this.toast.error('' ,'User exists', {
            timeOut: 1000,
          });
        }
      
      );
    }
}
