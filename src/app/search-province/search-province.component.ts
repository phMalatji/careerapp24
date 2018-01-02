import { Component, OnInit } from '@angular/core';
import {
  SharedModule
} from './../shared/shared.module';
import { Observable } from 'rxjs/Observable';
import { JobsService } from '../shared/jobs.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-province',
  templateUrl: './search-province.component.html',
  styleUrls: ['./search-province.component.scss']
})
export class SearchProvinceComponent implements OnInit {
  jobs: Observable <any> ;
  province:string;

  constructor(private jobServe: JobsService, private route:ActivatedRoute ) { 

    this.province=this.route.snapshot.params['province'];
    //this.jobs=this.jobServe.searchByProvince(this.province);

  }
 
  ngOnInit() {
  }

}
