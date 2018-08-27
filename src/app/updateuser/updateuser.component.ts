import { Component, OnInit } from '@angular/core';
import { Registration } from '../modal/Registration';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user: Registration;
  users: Registration[];
  cpy=false;
  updateIndex;
  companyIds =[1,2,3,4,5];
  updatedUser: Registration;
  cpn=false;
  roles: string[];
  projects: string[];
    constructor(private usersrv: VictorServiceService, private router: Router) { 
      this.user =new Registration();
      this.users = [];
      this.roles = [];
      this.projects =[];
      this.usersrv.getAllUser(sessionStorage.getItem('userName')).subscribe((data: Registration[])=>{
        this.users = data;
     // this.updateIndex =this.users.indexOf({ "id": 1 });
     for(let i =0;i<this.users.length;i++){
          if(this.users[i].id===sessionStorage.getItem('updateId')){
            this.updateIndex = i;
            this.updatedUser = this.users[i];
          }
     }
      });
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
    }
    confirmPassword(event: any){
       //console.log('cp',event.target.value);
      // console.log('p',this.user.password);
       if(this.updatedUser.password === event.target.value){
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
      //  console.log(this.user.roleName);
      }
    selectedProject(){
      console.log(this.user.projectName);
       
    }
    selectedCompanyId(){

    }
    updateUser(){
      console.log('user updated',this.updatedUser);
      
    //console.log(this.user.phoneNumber);
  //  console.log(this.user.userName);
    this.usersrv.updateUser(this.updatedUser).subscribe((res: any)=>{
     console.log(res);
    });
    }
    cancelUpdate(){
      this.router.navigate(['/superadmin/manageUser']);
    }
}
