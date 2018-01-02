import { Component, OnInit } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { menuItems } from './../models/menuItems';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  menuItemz:string[]=["Home", "About us"];
  constructor() { }

  ngOnInit() {
    console.log(this.menuItemz);
  }

}
