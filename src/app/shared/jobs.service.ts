import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { IJob, Skill } from './AppInterfaces';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';

const jobs = ["Software Dev", "CEO"];

@Injectable()
export class JobsService implements OnInit {
  provJobs: Observable<IJob[]>;
  //jobsCollectionRef: AngularFirestoreCollection<IJob>;
  jobs:any[];
  posts: Observable<any>;
  sp: Observable<IJob[]>;
  //jobDoc: AngularFirestoreDocument<IJob>;
  post: Observable<IJob>;
  totalJobs:number;
  //booksUrl: string = 'http://localhost:8000/api/books';
  jobsUrl: string = 'http://localhost:8000/api/jobs';

  constructor(private _http: Http) {
    this.getJobs().subscribe(
      data =>{
        this.jobs=data;
        this.setTotal();
      }
    )
   // this.jobsCollectionRef = this.afs.collection<IJob>('jobss');
   // this.jobs$ = this.jobsCollectionRef.valueChanges();

  }
  setTotal(){
    this.totalJobs=this.jobs.length;
  }
 getTotalJobs(){
  

console.log(this.totalJobs)

 }
getTots(){
  this.getJobs().subscribe(
    data => {
      this.jobs=data;

    }
);
}
  getJobs(){
    // this.posts = this.jobsCollectionRef.valueChanges();
    // return (this.posts)
    return this._http.get(this.jobsUrl)
    .map((resp: Response) => {
      return resp.json();
    })
    .catch(this.handleError);
  }
  getBooks(offset = 2) {
    // return this._http.get(this.booksUrl)
    //   .map((resp: Response) => resp.json())
    //   .catch(this.handleError);

  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  searchByProvince(searchPram: string) {


    console.log('lowercase search:' + searchPram)


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

