import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {
  SharedModule
} from './../shared/shared.module';
import {
  NgbModal,
  ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  IJob
} from './../shared/AppInterfaces';
import {
  JobsService
} from '../shared/jobs.service';

import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { Router , Routes} from '@angular/router';
import { AModalComponent } from '../shared/a-modal/a-modal.component';
import { AuthServiceService } from '../auth/auth-service.service';
import { PROVINCES , SECTORS} from '../shared/constants';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../shared/users.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  @ViewChild('modalDiv') modalDiv: ElementRef;
  @ViewChild(AModalComponent) modComp: AModalComponent;

  provinces:string[]=PROVINCES;
  sectors:string[]=SECTORS;
  openState: boolean = false;
  jobsArray: IJob[];
  closeResult: string;
  searching: boolean = false;
  jobs: Observable <any> ;
  sp: Observable <any> ;
  sectorSearch='assets/images/searchSector.png';
  countrySearch='assets/images/searchCountry.png';
  @Output() openModal = new EventEmitter();
  pagerJobs: any[];
  searchForm: FormGroup;
  searchTxt: FormControl;

  constructor(private jobServe: JobsService,
     private modalService: NgbModal,
     private usersService:UsersService,
     private tostr: ToastrService, 
        
 //     public authService: AuthServiceService,
    private router:Router) {
      this.jobs=this.jobServe.getJobs();
      this.searchTxt = new FormControl("", [Validators.required]);

      this.searchForm = new FormGroup({
          searchTxt: this.searchTxt
      });

  }

  ngOnInit() {
   // console.log(tokenNotExpired("jwt"));
     // console.log(this.authService.isAuthenticated())

      // this.posts = this.jobsCollectionRef.snapshotChanges()
      // .map(actions => {
      //   return actions.map(a => {
      //     const data = a.payload.doc.data() as IJob;
      //     const id = a.payload.doc.id;
      //     return { id, data };

      //   });
      // });

  }

  menuSelect(menu) {
      console.log('oi' + menu);
  }

  directSearch(searchQ: string) {
      this.modComp.openModal();
      console.log(this.searchTxt.value)
     this.jobServe.search(this.searchTxt.value).subscribe(
         jobs => {
             this.jobsArray=jobs;
             this.setPage();
         }
     );
     

    }
  searchProv(prov:string){
      this.router.navigate(['/province', prov])
  }

  setPage() {
    //this.pagerJobs = this.jobs.slice(0,4);
   // console.log(page)
   
   
      this.pagerJobs = this.jobsArray.slice(0, 4);
      //console.log(this.pagerJobs)
    
  }

  scrollFunc(e){
      console.log('scroling'+e)
  }
  searchSector(sector:string){
    this.router.navigate(['/sector', sector])
}

routeToJob(jobId:string){
    if(this.usersService.loggedIn()){
        console.log('im logged in bro')
    }
    else{
        console.log('not logged in')

        this.tostr.error("You need to login");
    }
 
}
  searchJob(searchQ) {
 

   


  }
  removeVar() {

  }

  open(content) {
      this.modalService.open(content).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return `with: ${reason}`;
      }
  }


}