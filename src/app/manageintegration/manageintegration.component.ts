import { Component, OnInit } from '@angular/core';
import { Integrations } from '../modal/integrations';
import { IdName } from '../modal/id-name';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
//import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-manageintegration',
  templateUrl: './manageintegration.component.html',
  styleUrls: ['./manageintegration.component.css']
})
export class ManageintegrationComponent implements OnInit {
integrations: Integrations[];
integ = false;
loading=false;
newIntegration: Integrations;
sourceList=['99 acres', 'Facebook', 'Excelsheet', 'Google', 'Magic Bricks'];
//sourceType: IdName;
  constructor(private srv: VictorServiceService, private router: Router,
  private spinner:NgxSpinnerService) { 
    this.integrations = [];
    this.newIntegration = new Integrations();
    this.newIntegration.sourceType = new IdName();
    this.loading=true;
    this.srv.getIntegrations(sessionStorage.getItem('compId')).subscribe((res: Integrations[])=>{
      this.integrations = res;
      this.loading=false;
      console.log(this.integrations);
     // console.log(this,this.integrations);
    
    });

  }

  ngOnInit() {
  
  }
  showForm(){
   this.router.navigate(['/superadmin/createIntegration']);
  }
  createIntegration(){
    //return;
    //this.integ= true;
    console.log('create inetrgation');
    this.srv.postIntegrations(4).subscribe((res:any)=>{
          console.log('integ created: ', res);
    });
  }
  cancelIntegration(){
   // return;
    this.integ= false;
  }
}
