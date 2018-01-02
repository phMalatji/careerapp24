import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../shared/users.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
 

  constructor(
   // private authService:AuthServiceService,
    private router:Router,
    private userServe:UsersService
  ){

    }


  canActivate():boolean{
   return this.userServe.isLogged();
    // return this.authService.user$
    //   .map(user => {
    //       if(user && user.uid){
              
      //     }
      //     else{
      //       this.router.navigate(['/search']);
      //       return false;
      //     }
      // });
 
  }

}
