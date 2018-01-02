import { Component, OnInit } from '@angular/core';
//Firebase storage
import * as firebase from 'firebase/app';
import 'firebase/storage'; //global fb storage 
import { Contact, IUser } from './../shared/AppInterfaces';

import { FormGroup, FormControl } from '@angular/forms';


import { UsersService } from '../shared/users.service';
import {

  SharedModule
} from './../shared/shared.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  contact = {} as Contact;
  theUser:IUser;

  contactKey: string;
  profileForm: FormGroup;
  userName: FormControl;
  userEmail: FormControl;
  userCell: FormControl;
  userQuality: FormControl;

  constructor(userServe: UsersService) {
    this.theUser = userServe.getUser();
    this.userName = new FormControl("");
    this.userEmail = new FormControl("");

    this.userCell = new FormControl("");
    this.userQuality = new FormControl("");
    this.profileForm = new FormGroup({
      userName: this.userName,
      userEmail: this.userEmail,
      userCell: this.userCell,
      userQuality: this.userQuality
    });
  }

  ngOnInit() {

  }

  updateProfile() {
    console.log("oi her")
  }
  uploadFile(event: any) {
    const file = event.srcElement.files[0];
    const storageRef = firebase.storage().ref(`profileImgs`);
    storageRef.put(file)
      .then(uploadTask => this.contact.imageUrl = uploadTask.downloadURL);

    console.log(this.contact.imageUrl)
  }

}
