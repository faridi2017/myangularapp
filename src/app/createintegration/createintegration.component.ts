import { Component, OnInit } from '@angular/core';
import { Integrations } from '../modal/integrations';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IdName } from '../modal/id-name';
import { VictorServiceService } from '../apiService/victor-service.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-createintegration',
  templateUrl: './createintegration.component.html',
  styleUrls: ['./createintegration.component.css']
})
export class CreateintegrationComponent implements OnInit {
newIntegration: Integrations;
createIntergrationForm;
name="";
show=false;
companyId="";
userName="";
value="";
compId;
  constructor(private router: Router, private srv: VictorServiceService,
  private spinner:NgxSpinnerService) {
    this.newIntegration = new Integrations();
    this.newIntegration.sourceType = new IdName();
  
    this.compId=sessionStorage.getItem('compId');
    this.createIntergrationForm=new FormGroup({
      'Name':new FormControl('',Validators.compose([Validators.required])),
      'companyId':new FormControl('',Validators.compose([Validators.required])),
      'userName':new FormControl('',Validators.compose([Validators.required])),
      'value':new FormControl('',Validators.compose([Validators.required])),
    });
   }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 1000);
  }
 
     //newIntegration.value
     createIntegration(createIntergrationForm){
       this.name=createIntergrationForm.Name;
       this.companyId=createIntergrationForm.companyId;
       this.userName=createIntergrationForm.userName;
       this.value=createIntergrationForm.value;
       if(this.name.length===0||this.companyId.length===0||
           this.userName.length===0||this.value.length===0){
             console.log(this.name,this.companyId,this.userName,this.value);
        alert('Please Fill All Filed');
        return;
       }else{
        this.srv.postIntegrations(this.newIntegration.companyId).subscribe((res:any)=>{
          console.log('integ created: ', res);
        });
        alert('Company Intergatred Successfully');
        this.router.navigateByUrl('/superadmin/manageIntegrations');
       }



      
     }
     cancelIntegration(){
      this.router.navigate(['/superadmin/manageIntegrations']);
    }
    selectedProject(){
      //   <option>99 Acres</option>
     // <option>Magicbricks</option>
     if(this.newIntegration.sourceType.name=="99 Acres" || this.newIntegration.sourceType.name=="Magicbricks" ){
        this.show= true;
     }else{
       this.show = false;
     }
      return;
          }
}
