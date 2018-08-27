import { Component, OnInit } from '@angular/core';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Company } from '../modal/company';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {
companies: Company[];
dCompany: Company;
sCompany : Company;
loading=false;
  constructor(private cmpsrv: VictorServiceService, private router: Router,
  private spinner:NgxSpinnerService) {
    this.companies = [];
    this.sCompany = new Company();
    this.loading=true;
    this.cmpsrv.getAllCompanies().subscribe((data: Company[])=>{
     // console.log(data);
      this.companies = data;
      this.loading=false;
    },
    error => {
      console.error("Error in get company Api or token expired!");
      sessionStorage.clear();
      alert('Your session has been expired! Login Again');
    this.router.navigate(['']);
      return throwError(error);  // Angular 6/RxJS 6
     }
  );

   }

  ngOnInit() {
  
  }
  updateCompany(id:string){
    console.log('updateCompany');
    sessionStorage.setItem('companyId',id);
    this.router.navigate(['/superadmin/updateCompany']);
  }
  
  createCompany(){
    console.log('createCompany');
   this.router.navigate(['/superadmin/createCompany']);

  }
  showForm(){
    this.router.navigate(['/superadmin/createIntegration']);
   }
  //confirmDelete(myList)
  delete(myList:Company){
    console.log('delete');
    //this.display='none'; 
   // $.modal.close();
   this.dCompany = myList;
   console.log(this.dCompany);
  }
  confirmDelete(){
    console.log('confirm delete');
  }
  integration(companyId){
      sessionStorage.setItem('compId',companyId);
      this.router.navigate(['/superadmin/manageIntegrations']);
  }
}
