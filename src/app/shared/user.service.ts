import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { IUser } from './AppInterfaces';
//import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';


@Injectable()
export class UserService implements OnInit{
  
  user: Observable<IUser>
  userToken:string;

  constructor( ) { 

  }

  getUserType(userEmail){
    try{
   
        let email = userEmail.forEach(element => {
          console.log(element.email)
        });
      }

    catch(err){
      console.log('error guys')
    }

  }

   ngOnInit() {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
    //  .map(actions => {
    //   return actions.map(a => {
   }
  }