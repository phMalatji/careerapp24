import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { RoutingRoutingModule, routingComponents } from './routing/routing-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule,  } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AddComponent } from './add/add.component';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthguardGuard } from './auth/authguard.guard';
import { ProfileComponent } from './profile/profile.component';
import { JobsService } from './shared/jobs.service';

import { UsersService } from './shared/users.service';
import { SearchProvinceComponent } from './search-province/search-province.component';
import { SectorComponent } from './sector/sector.component';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';
import { AModalComponent } from './shared/a-modal/a-modal.component';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { PagerService } from './shared/pager.service';
import { PagerComponent } from './pager/pager.component';
import { JobComponent } from './job/job.component';
import { SignupComponent } from './signup/signup.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './shared/data.interceptor';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { SignupemployerComponent } from './signupemployer/signupemployer.component';
declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    SearchComponent,
    RegisterComponent,
    HomeComponent,
    AddComponent,
    FooterComponent,
    ProfileComponent,
    ModalTriggerDirective,
    AModalComponent,
    SearchProvinceComponent,
    SectorComponent,
    LoginComponent,
    PagerComponent,
    JobComponent,
    SignupComponent,
    SignupemployerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    CurrencyMaskModule,
    HttpClientModule,
    RoutingRoutingModule,
    
   ToastrModule.forRoot(),
  //  AngularFireAuthModule,
    //AngularFireModule.initializeApp(environment.firebase),
   // AngularFirestoreModule.enablePersistence(),
    NgbModule.forRoot()
  ],
  providers: [
     AuthguardGuard, JobsService, UsersService,MatSnackBar, PagerService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//AuthServiceService,