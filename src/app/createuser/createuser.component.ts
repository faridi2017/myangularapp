import { Component, OnInit } from '@angular/core';
import { Registration } from '../modal/Registration';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Role } from '../modal/Role';
import { Project } from '../modal/project';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  createuserForm;
  phoneNumber="";
  userName="";
  password="";
  cPassword="";
  companyID="";
  email="";
  firstName="";
  lastName="";
  roleName="";
  projectName="";
user: Registration;
companies=[0,1,2,3,4,5];
user1: Registration;
role: Role;
//roleiid;
bRoleid = false;
project: Project;
cpy=false;
cpn=false;
roles: string[];
projects: string[];

  constructor(private usersrv: VictorServiceService, private router:Router,
  private spinner:NgxSpinnerService) { 
    this.user =new Registration();
    this.user.role = new Role();
    this.user.project = new Project();
    this.user1 = new Registration();
    this.user1.role = new Role();
    this.user1.project = new Project();
    this.roles = [];

    this.createuserForm=new FormGroup({
      'phoneNumber':new FormControl('',Validators.compose([Validators.required])),
      'companyID':new FormControl('',Validators.compose([Validators.required])),
      'userName':new FormControl('',Validators.compose([Validators.required])),
      'password':new FormControl('',Validators.compose([Validators.required])),
      'cPassword':new FormControl('',Validators.compose([Validators.required])),
      'email':new FormControl('',Validators.compose([Validators.required])),
      'firstName':new FormControl('',Validators.compose([Validators.required])),
      'lastName':new FormControl('',Validators.compose([Validators.required])),
      'projectName':new FormControl('',Validators.compose([Validators.required])),
      'roleName':new FormControl('',Validators.compose([Validators.required])),
    }); 


 if(sessionStorage.getItem('roleId')=='1'){
   this.bRoleid = true;
 }
    this.projects =[];
   
    this.usersrv.getUserRoles().subscribe((data: any)=>{
    //  console.log('role',data);
      for(let user of data){
          this.roles.push(user.name);
      }
    });
    this.usersrv.getUserProject(sessionStorage.getItem('userName')).subscribe((data:any)=>{
      for(let user of data){
        this.projects.push(user.projectName);
    }
    });
   // console.log(this.roles);
  }

  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();
 
     setTimeout(() => {
         /** spinner ends after 5 seconds */
         this.spinner.hide();
     }, 1000);
  }
  confirmPassword(event: any){
     // console.log(event.target.value);
     if(this.user.password == event.target.value){
        this.cpy = true;
        this.cpn = false;
     }else{
      this.cpy = false;
      this.cpn = true;
     }
      //this.user.password = event.target.value;
     // console.log('password', this.user.password);
  }
  selectedRole(){
     // console.log(this.user.role.name);
    }
  selectedProject(){
    console.log(this.user.projectName);
     
  }
  selectedCompanyId(){
    console.log(this.user.companyId);
  }
  
  createUser(createuserForm){
    console.log('form submitted',this.user);
    this.phoneNumber=createuserForm.phoneNumber;
    this.userName=createuserForm.userName;
    this.password=createuserForm.password;
    this.cPassword=createuserForm.cPassword;
    this.companyID=createuserForm.companyID;
    this.email=createuserForm.email;
    this.firstName=createuserForm.firstName;
    this.lastName=createuserForm.lastName;
    this.projectName=createuserForm.projectName;
    this.roleName=createuserForm.roleName;

    if(this.phoneNumber.length===0||this.userName.length===0||
      this.password.length===0||this.cPassword.length===0||
      this.companyID.length===0||this.email.length===0||
      this.firstName.length===0||this.lastName.length===0||
      this.projectName.length===0||this.roleName.length===0){
        console.log(this.phoneNumber,this.userName,this.password,
          this.cPassword,this.companyID,this.email,this.firstName,
          this.lastName,this.projectName,this.roleName);
       alert('Please Fill All Field');
       return;
    }else{
      this.usersrv.postAddUser(this.user).subscribe((res: any)=>{
        console.log('submitted', res);
        alert('User Created Successfully');
        this.router.navigateByUrl('/superadmin/manageUser');
       },error => {
        console.error("Error in createuser api!");
       // sessionStorage.clear();
        alert('user could not be created');
        this.router.navigateByUrl('/superadmin/manageUser');
     // this.router.navigate(['']);
        return throwError(error);  // Angular 6/RxJS 6
       }
      );
     
    
    }
    
  //console.log(this.user.phoneNumber);
 // console.log(this.user.userName);
  
  }
  cancleuser(){
    console.log('cancel User');
    this.router.navigate(['/superadmin/manageUser']);
  }
  
}
