import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Company } from '../modal/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
company : Company;
  constructor(private router : Router, private cmpService : VictorServiceService) { 
    this.company = new Company;
  }

  ngOnInit() {
  }
  cancelCompany(){
    console.log(' Cancel company');
    this.router.navigate(['/admin/manageCompanies']);
  }
  updateCompany(){
    console.log('updated company');
    console.log(this.company);
   // this.cmpService.postAddCompany(this.company).subscribe((res:any)=>{
     // console.log(res);
     // alert('Company Added');
    
   // });
  }
  }
