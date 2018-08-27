import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
//import {LoadingModule} from 'ngx-loading';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



import { HttpClientModule, } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VictorServiceService } from './apiService/victor-service.service';
import { MainComponent } from './main/main.component';

import { AdminhomedashComponent } from './adminhomedash/adminhomedash.component';
import { LocationComponent } from './location/location.component';
import { RawleadsComponent } from './rawleads/rawleads.component';
import { CurrentleadsComponent } from './currentleads/currentleads.component';
import { NoworkComponent } from './nowork/nowork.component';
import { NotconnectedComponent } from './notconnected/notconnected.component';
import { FollowupComponent } from './followup/followup.component';
import { VisitonComponent } from './visiton/visiton.component';
import { VisitdoneComponent } from './visitdone/visitdone.component';
import { VisitdeadComponent } from './visitdead/visitdead.component';
import { OtherProjectCountComponent } from './other-project-count/other-project-count.component';
import { ResaleCountComponent } from './resale-count/resale-count.component';
import { AlreadyBookedComponent } from './already-booked/already-booked.component';
import { BookedDoneComponent } from './booked-done/booked-done.component';
import { DeadCountComponent } from './dead-count/dead-count.component';
import { RentCountComponent } from './rent-count/rent-count.component';
import { PlotCountComponent } from './plot-count/plot-count.component';
import { DuplicateCountComponent } from './duplicate-count/duplicate-count.component';
import { VcnavigationComponent } from './vcnavigation/vcnavigation.component';
import { AgmCoreModule } from '@agm/core';
//import * as alasql from 'alasql';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { NewlocationComponent } from './newlocation/newlocation.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";


import { ManageProjectsComponent } from './manage-projects/manage-projects.component';

import { DocumentComponent } from './document/document.component';


import { MyfileComponent } from './myfile/myfile.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FooterComponent } from './footer/footer.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ManageintegrationComponent } from './manageintegration/manageintegration.component';
import { CreateintegrationComponent } from './createintegration/createintegration.component';
import { VcdashboardComponent } from './vcdashboard/vcdashboard.component';
import { VchomeComponent } from './vchome/vchome.component';
//import { NgxCountrySelectModule } from 'ngx-country-select';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';



const appRoutes: Routes = [
{ path: '', component: LoginComponent },
  { path: 'superadmin', component: VchomeComponent,
 
  children: [{path: '', component: MainComponent},
          {path: 'home', component: MainComponent},
          {path: 'location', component: LocationComponent},
          {path: 'projects', component: ManageProjectsComponent},
          {path: 'rawLead', component: RawleadsComponent},
          {path: 'currentLead', component: CurrentleadsComponent},
          {path: 'noWorkLead', component: NoworkComponent},
          {path: 'notConnectedLead', component: NotconnectedComponent},
          {path: 'followUpLead', component: FollowupComponent},
          {path: 'visitOnLead', component: VisitonComponent},
          {path: 'visitDoneLead', component: VisitdoneComponent},
          {path: 'visitDeadLead', component: VisitdeadComponent},
          {path: 'otherProjectLead', component: OtherProjectCountComponent},
          {path: 'resaleLead', component: ResaleCountComponent},
          {path: 'alreadyBookedLead', component: AlreadyBookedComponent},
          {path: 'bookedDoneLead', component: BookedDoneComponent},
          {path: 'deadLead', component: DeadCountComponent},
          {path: 'rentLead', component: RentCountComponent},
          {path: 'plotLead',component: PlotCountComponent},
          {path: 'duplicateLead', component: DuplicateCountComponent},
          {path: 'sales', component: NewlocationComponent},
          {path: 'manageIntegrations', component: ManageintegrationComponent},
          {path: 'uploadFiles', component: MyfileComponent},
          {path: 'createIntegration', component: CreateintegrationComponent},
          {path: 'document', component: DocumentComponent},
          {path: 'createuser', component: CreateuserComponent},
          {path: 'updateUser', component: UpdateuserComponent},
          {path: 'manageUser', component: ManageuserComponent},
          {path: 'manageCompanies', component: ManagecompaniesComponent},
          {path: 'createCompany',component: CreatecompanyComponent},
          {path: 'updateCompany',component: UpdateCompanyComponent},
          {path: 'vcdashboard',component: VcdashboardComponent}
        //  {path: 'logout', component: }
    ]},

  
    {path: '**', component:LoginComponent}
  
 
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LocationComponent,
   
  
    MainComponent,
    ManageProjectsComponent,
    AdminhomedashComponent,
    RawleadsComponent,
    CurrentleadsComponent,
    NoworkComponent,
    NotconnectedComponent,
    FollowupComponent,
    VisitonComponent,
    VisitdoneComponent,
    VisitdeadComponent,
    OtherProjectCountComponent,
    ResaleCountComponent,
    AlreadyBookedComponent,
    BookedDoneComponent,
    DeadCountComponent,
    RentCountComponent,
    PlotCountComponent,
    DuplicateCountComponent,
    VcnavigationComponent,
    NewlocationComponent,
    
    DocumentComponent,

  
    MyfileComponent,
    CreateuserComponent,
    UpdateuserComponent,
    FooterComponent,
    ManageuserComponent,
    ManagecompaniesComponent,
    CreatecompanyComponent,
    UpdateCompanyComponent,
    ManageintegrationComponent,
    CreateintegrationComponent,
    VcdashboardComponent,
    VchomeComponent
   
     ],
  imports: [
    GooglePlaceModule,
    BrowserModule,
    NgMultiSelectDropDownModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
    HttpClientModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#7d9156', 
      secondaryColour: '#f7b332', 
      tertiaryColour: '#d25e30'
      
      
  }),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYBY5dswX8ks7M7c7YoQinAEgYwEHg1Ds'
    }),
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule
   
    
    
  ],
  providers: [VictorServiceService, HttpClientModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// google map: api key: AIzaSyBYBY5dswX8ks7M7c7YoQinAEgYwEHg1Ds