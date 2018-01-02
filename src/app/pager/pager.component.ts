import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
@Input() page:number=1;
@Input() totalPages:number;
@Output() private changePage:EventEmitter<any> = new EventEmitter<any>();
pageObj={};
  constructor() { }

  ngOnInit() {
    console.log(this.totalPages)
  }

  next(){
    console.log('next'+this.page+ ' '+this.totalPages);
   this.page=this.page+1;
    let act:string;
    this.changePage.emit({
     page:this.page + 1,
     act:"next"
    
    });
  }
  prev(){
    console.log('prev')
    this.page=this.page-1;
    this.changePage.emit({
      page:this.page - 1,
      act:"prev"
    });
  }

}
