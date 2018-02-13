import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { JobsService } from '../shared/jobs.service';
import { IJob, IBook } from '../shared/AppInterfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map'

import { PagerService } from '../shared/pager.service';
import { ActivatedRoute } from '@angular/router';
import { preserveWhitespacesDefault } from '@angular/compiler/src/config';
import { FormControl, FormGroup } from '@angular/forms';

const URL = 'http://localhost:8000/api/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  startIndex: number=0;
 jobs: IJob[];
  pagerJobs: any[];
  currentPage: number;
  pageSize: number = 4;
  lastSize:number=4;
  pageLimit = 2;
  results = '';
  totalPages:number=1;
  searchTxtField:FormControl;
  searchForm:FormGroup;

  // pager object
  pager: any = {};

  // array of all items to be paged
  private allItems: any[];
  // paged items
  pagedItems: any[];

  constructor(private jobServe: JobsService,
    private _http: Http,
    private pagerService: PagerService,
    private route: ActivatedRoute) {
      this.searchTxtField = new FormControl("");
      this.searchForm = new FormGroup({
        searchTxtField: this.searchTxtField

      });
    this.currentPage = this.route.snapshot.params['page'];
    if (!this.currentPage) {
      this.currentPage = 1;
    }


  }

  getBooks() {
    console.log('oi');
    // this.books=this._books;
    // this.books.slice(0,2);

    //  console.log(this.books.length)
  }
recallJobs(){
  //console.log(this.searchTxtField.value);

  this.jobServe.search(this.searchTxtField.value).subscribe(
    data => {
      this.jobs=data;
      this.setPage(this.currentPage);
    
      if(data==null){
        console.log('no jobs bro')
      }
    },
    err => {
    
    }
  );
}
  ngOnInit() {


    this.jobServe.getJobs().subscribe(
      data => {
          this.jobs=data;
          this.setPage(this.currentPage);
          this.totalPages=this.getTotalPages();
      });
      
     
      
  }

  delete() {
    console.log('ois')
  }
  
  getTotalPages(){
    //console.log('hey bro'+this.jobs.length + this.pageSize)
     return Math.ceil(this.jobs.length / this.pageSize);
   
  }

paginate(p:any){
 if (p.act=="next"){
  // console.log('atleast' +this.lastSize)
  this.startIndex=this.startIndex+4;
  
  this.lastSize=this.lastSize+4;
 // console.log('last' +this.lastSize)
 }
 else if(p.act=="prev"){
  this.startIndex =this.startIndex - 4;
  this.lastSize = this.lastSize - 4;
 }
 this.jobServe.getJobs().subscribe(
  data => {
      this.jobs=data;

  });

// console.log(this.startIndex , this.lastSize)
 this.pagerJobs.length=0;
 this.pagerJobs = this.jobs.slice(this.startIndex, this.lastSize);
//s  console.log(this.pagerJobs)

}
  setPage(page: number) {
    //this.pagerJobs = this.jobs.slice(0,4);
   // console.log(page)
   
    if (page == 1) {
      this.pagerJobs = this.jobs.slice(0, this.pageSize);
      //console.log(this.pagerJobs)
    }
//console.log(this.pagerJobs)
  //  console.log(this.jobs.length);
    // get pager object from service
    // this.pager = this.pagerService.getPager(this.jobs.length, page);

    // get current page of items
    //this.pagedItems = this.jobs.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // console.log(this.pager.startIndex, this.pager.endIndex + 1);
  }



}
