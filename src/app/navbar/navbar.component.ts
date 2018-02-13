import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { UsersService } from '../shared/users.service';
import { IUser } from '../shared/AppInterfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  user:IUser;
uId:string='00';

  //@ViewChild('sidenav') public sideNav:MatDrawer;

  constructor(private _router:Router, 
              public userService:UsersService,
            ) { 


  }
logout(){
 this.userService.logout();
}
  login(){
   
    this._router.navigate(['/login']);
    console.log('io')
  }
  ngOnInit() {
 //   console.log(this.sideNav)

   // console.log(this.userService.getToken());
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;

    //document.querySelector('body').classList.add('blue');
  }
  openSide(){
    //this.sideNav.open();
  }
  navigate(){
    console.log('lol');
   // this._router.navigate(['/register']);  
  }
  loginUser(){
    console.log('lol');
  }
}
