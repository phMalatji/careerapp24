import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { IJob } from '../shared/AppInterfaces';
import { JobsService } from '../shared/jobs.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
jobId:string;
job:IJob;
  constructor(private router:Router,
    private activeRoute:ActivatedRoute,
    private toaster:ToastrService,
    public jobService: JobsService) { }

  ngOnInit() {
    this.jobId = this.activeRoute.snapshot.params['jobId'];
    this.jobService.getJob(this.jobId).subscribe(
      data => {
       this.job= data;
      },
      err => {
        console.log('Job not found')
      }
    )
  }


  deleteJob(jobId:string):void{
    this.jobService.deleteJob(jobId).subscribe(
      data => {
        if(data){
          console.log('Job deleted yeah');
          this.toaster.warning('Job removed','',{
            timeOut:1000
          });
          setTimeout( ()=> {
            this.router.navigate(['/home']);
          },
        1000);
          
        }
      },

      err =>{
        console.log("job alrready deleted bro")
      }
    )
  }

}
