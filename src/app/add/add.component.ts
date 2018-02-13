import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { IJob } from './../shared/AppInterfaces'; 
import { PROVINCES } from '../shared/constants';
import { JobsService } from '../shared/jobs.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
cond=true;

  addForm:FormGroup;
private jobTitle:FormControl;
private jobDesc:FormControl;
private jobRemun:FormControl;
private jobIndustry:FormControl;
private jobProvince:FormControl;
private jobCompany:FormControl;
private jCompany:FormControl;
private jobClose:FormControl;
prov:string;
provinces:string[]=PROVINCES;
industrySelected:string;
charsLeft:number=240;
wordCount:number=0;


  constructor(private jobServe:JobsService,private  router:Router,private toastr:ToastrService) {


   }

  ngOnInit() {
    this.jobTitle = new FormControl("",[Validators.required]);
    this.jobDesc = new FormControl("",[Validators.required, Validators.maxLength(240)]);
    this.jobIndustry = new FormControl( Validators.required);
    this.jobRemun = new FormControl( Validators.required);
    this.jobProvince = new FormControl(Validators.required);
    this.jobCompany = new FormControl("",Validators.required);
    this.jobClose = new FormControl("",Validators.required);
   

   this.addForm = new FormGroup({
      jobTitle: this.jobTitle,
      jobDesc:this.jobDesc,
      jobIndustry:this.jobIndustry,
      jobRemun:this.jobRemun,
      jobProvince:this.jobProvince,
      jobCompany:this.jobCompany,
      jobClose:this.jobClose
   });

   
  }
  setProv(prov:string){
    this.prov=prov;
  }
  countWords(event){
    let chr  = this.jobDesc.value;

    this.wordCount++;
    this.charsLeft=240-chr.length;

  //  console.log('oi'+this.wordCount)
  }
  validJob(){
    return  this.addForm.controls.jobTitle.invalid && this.addForm.controls.jobTitle.touched
  }
  validDesc(){
    return this.jobDesc.invalid && this.jobDesc.touched
  }
  validDescLength(){
    if(this.charsLeft < 0){
      return false;
    }
   
    return true;
  }
  addPost(){


    // this.afs.collection('jobss').add({'title': this.jobTitle, 'description': this.jobDesc});
  }

  postJob(){
    if(this.addForm.valid){

      let date = new Date();
    let body = {


          "title":this.jobTitle.value,
          "desc":this.jobDesc.value,
          "company":this.jobCompany.value,
          "remun":this.jobRemun.value,
          "province":this.prov,
          "industry":this.industrySelected,
          "dateClosing":this.jobClose.value

      }
    
      this.jobServe.postJob(body).subscribe(
        data => {
          console.log('job posted bro');
          this.toastr.success('Job added','',{
            timeOut:1000
          });
          this.router.navigate(['/home']);
        },
        err =>{
        //  console.log(body);
          console.log('Error bro here')
        }
      );

    //  console.log(body);



    }
    else{
      console.log('show error');
    }
  //  console.log(this.addForm.valid)
  }


}
