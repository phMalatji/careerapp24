import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { IJob } from './../shared/AppInterfaces'; 

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
private jobIndustry:FormControl;
  constructor() {


   }

  ngOnInit() {
    this.jobTitle = new FormControl("",[Validators.required]);
    this.jobDesc = new FormControl("",[Validators.required, Validators.maxLength(240)]);
    this.jobIndustry = new FormControl( Validators.required);

   this.addForm = new FormGroup({
      jobTitle: this.jobTitle,
      jobDesc:this.jobDesc,
      jobIndustry:this.jobIndustry
   });

   
  }
  validJob(){
    return  this.addForm.controls.jobTitle.invalid && this.addForm.controls.jobTitle.touched
  }
  validDesc(){
    return this.jobDesc.invalid && this.jobDesc.touched
  }
  validDescLength(){
    return this.jobDesc.validator
  }
  addPost(){


    // this.afs.collection('jobss').add({'title': this.jobTitle, 'description': this.jobDesc});
  }

  postJob(postValue){
    if(this.addForm.valid){
      console.log(postValue);
    }
    else{
      console.log('show error');
    }
    console.log(this.addForm.valid)
  }


}
