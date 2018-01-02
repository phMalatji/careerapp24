import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from './../home/home.component';
import { AuthguardGuard } from '../auth/authguard.guard';
import { RegisterComponent } from '../register/register.component';
import { AddComponent } from '../add/add.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchProvinceComponent } from '../search-province/search-province.component';
import { SectorComponent } from '../sector/sector.component';
import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';
import { JobComponent } from '../job/job.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent , canActivate: [AuthguardGuard]},
  { path: 'add', component: AddComponent, canActivate: [AuthguardGuard] },
  { path:'home', component:HomeComponent,canActivate: [AuthguardGuard]}, 
  { path:'home/:page', component:HomeComponent,canActivate: [AuthguardGuard]}, 
  { path:'job/:jobId', component:JobComponent,canActivate: [AuthguardGuard]}, 
  { path:'profile', component:ProfileComponent},
  { path:'province/:province', component:SearchProvinceComponent},
  { path:'sector/:sector', component:SectorComponent},
  { path:'search', component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

export const routingComponents = [RegisterComponent];
