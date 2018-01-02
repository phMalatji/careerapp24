import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { IUser } from '../shared/AppInterfaces';


@Injectable()
export class AuthServiceService {
  user$: Observable<firebase.User>;

  theUser:IUser;
  constructor(
    private router:Router,
    private afAuth: AngularFireAuth
  )
   {
    this.user$ = this.afAuth.authState;
   // this.setProps();
   }


   login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(_ =>{ 
      this.router.navigate(['./profile']);
    
    }
  
    )
    .catch( error => console.log('auth error', error))

   }

   logout(){
      this.afAuth.auth.signOut();
      this.router.navigate(['/home']);
   }

   

   isAuthenticated():boolean{
    var user = firebase.auth().currentUser;
      if(user){
        console.log('user is logged in');
        return true;
      }
      else{
        console.log('not logged in');
        return false;
      }
   }

   getUser(){
    this.user$.forEach( e => {
      this.theUser.email = e.email;
     // this.theUser.name = e.displayName;
    });
  
     return this.theUser;
   }

   getEmail(){
      this.user$.forEach( e => {
        this.theUser.email = e.email;
       // this.theUser.name = e.displayName;
      });
      return this.theUser.email;
   }
}
