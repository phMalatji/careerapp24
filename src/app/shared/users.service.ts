import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { IUser } from './AppInterfaces';

import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions,Headers } from '@angular/http';

@Injectable()
export class UsersService implements OnInit {
  user: Observable<IUser>;
  userToken: string;
  
  usersRef: string = 'http://localhost:8000/api/users';

  constructor(private _http: Http) {

    // this.jobsCollectionRef = this.afs.collection<IJob>('jobss');
    // this.jobs$ = this.jobsCollectionRef.valueChanges();

  }

  getToken(): string {
    if (window.localStorage.jwt === undefined) {
      console.log('u need to login');
      //this.userToken = window.localStorage.userToken;
      return null;
    }
    else {
      return this.userToken;
    }
    
  }

  login(user:IUser){
    console.log('we loggin in');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = user;
    return this._http.post(this.usersRef+ '/login', body, options ).map((res: Response) => res.json());
  }

  signup(email:string, password:string){
      console.log('signing up')
  }
  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  isLogged(){
    if(window.localStorage.jwt){
      return true;
    }
    else{
      return false;
    }
  }

  getUser():IUser{
   let tempUser:IUser;
      return tempUser;
    
  }
  logout(){
    window.localStorage.clear();
  }

  directSearchJob(searchQ: string) {

    var search = searchQ.toLocaleLowerCase();
  }





  ngOnInit() {


  }
}

