import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { IJob, Skill } from './AppInterfaces';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Rx';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { AuthHttp } from 'angular2-jwt';
import { tokenNotExpired,JwtHelper } from 'angular2-jwt';
import { error } from 'util';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class JobsService implements OnInit {
  provJobs: Observable<IJob[]>;
  //jobsCollectionRef: AngularFirestoreCollection<IJob>;
  jobs: any[];
  posts: Observable<any>;
  sp: Observable<IJob[]>;
  //jobDoc: AngularFirestoreDocument<IJob>;
  post: Observable<IJob>;
  totalJobs: number;

  constructor(private _http: HttpClient) {
    this.getJobs().subscribe(
      data => {
        this.jobs = data;
        this.setTotal();
      }
    )
    // this.jobsCollectionRef = this.afs.collection<IJob>('jobss');
    // this.jobs$ = this.jobsCollectionRef.valueChanges();

  }
  setTotal() {
    this.totalJobs = this.jobs.length;
  }
  getTotalJobs() {


    console.log(this.totalJobs)

  }
  postJob(body:{}){
    console.log(body)
    return this._http.post('/api/jobs',body, httpOptions)
    
    .catch(err => {
      console.log(err)
      throw Error;
    })
   
  }
  getTots() {
    this.getJobs().subscribe(
      data => {
        this.jobs = data;

      }
    );
  }


  getJobs(): Observable<IJob[]> {
    // this.posts = this.jobsCollectionRef.valueChanges();
    // return (this.posts)
    return this._http.get('/api/jobs')
      .map((resp: Response) => {
        return resp;
      })
      .catch(this.handleError);
  }
  deleteJob(jobId:string):Observable<any>{
    return this._http.delete('/api/jobs/'+jobId);
  }
  getJob(jobId:string):Observable<IJob>{

    return this._http.get('/api/jobs/'+jobId)
    .map((resp: Response) => {
      return resp;
    })
    .catch(this.handleError);
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  search(searchPram: string) {


    return this._http.get('/api/search/'+searchPram)
    .map((resp: Response) => {
      return resp;
    })
    .catch(this.handleError);
    // this.jobsCollectionRef = this.afs.collection<IJob>('jobss', ref => {
    //   // Compose a query using multiple .where() methods
    //   return ref
    //     .where('province', '==', searchPram)

    // });
    // this.sp = this.jobsCollectionRef.valueChanges();
    // return this.sp;


  }
  directSearchJob(searchQ: string) {

    var search = searchQ.toLocaleLowerCase();
    var results: Skill[] = [];

    // JOBSARRAY.forEach(
    //   job => {
    //         var matchSkillJob= job.skills.filter(skill => 
    //           skill.name.toLocaleLowerCase().indexOf(search) > -1);

    //           matchSkillJob = matchSkillJob.map((skill:any) => {
    //             skill.jobId = job.id;
    //             return skill;
    //           })
    //         results = results.concat(matchSkillJob);

    //   });

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);

    return emitter;


  }
  searchJob(searchPram: string) {



    console.log('lowercase search:' + searchPram)



  }

  getPost(postId) {

  }

  ngOnInit() {


    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //  .map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as IJob;
    //     const id = a.payload.doc.id;
    //     return { id, data };

    //   });
    // });
  }
}

