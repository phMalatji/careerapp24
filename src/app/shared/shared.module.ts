import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
   MatCheckboxModule,
   MatSidenavModule,
   MatInputModule,
   MatToolbarModule,
   MatMenuModule,
   MatTabsModule,
   MatCardModule,
   MatProgressSpinnerModule
 } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,MatSidenavModule,MatInputModule,
    MatToolbarModule,MatMenuModule,MatTabsModule,MatCardModule,MatProgressSpinnerModule
  ],
  exports:[
    BrowserAnimationsModule,
    FlexLayoutModule,  FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatSidenavModule,MatInputModule,MatToolbarModule,
    MatMenuModule,MatTabsModule,MatCardModule,MatProgressSpinnerModule
  ],
  declarations: []
})
export class SharedModule { }
