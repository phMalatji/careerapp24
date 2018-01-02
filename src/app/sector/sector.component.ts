import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {
  results : any = [];
  constructor(private http:Http) { 
    this.getJobs();
    console.log(this.results)

  }

  ngOnInit() {
  }

  getJobs():Observable<any>{
      return this.http.get('http://localhost:5000/jobs').map ( res =>{ this.results.push(res)})
  }
}
