import { Component, OnInit } from '@angular/core';
import { Registration } from '../modal/Registration';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Router } from '@angular/router';
import { Role } from '../modal/Role';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
users: Registration[];
userD: Registration;
sUser : Registration;
loading=false;
//role: Role;
display;
  constructor(private userService:VictorServiceService, private router: Router,
  private spinner:NgxSpinnerService) {
    this.users = [];
    this.sUser = new Registration();
    this.sUser.role = new Role();
    this.loading=true;
    this.userService.getAllUser(sessionStorage.getItem('userName')).subscribe((data: Registration[])=>{
      this.users = data;
      this.loading=false;
      //console.log(this.users);
     // console.log(this.users);
      
      //console.log('projects', this.projects);
    });

   }

  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();
 
     setTimeout(() => {
         /** spinner ends after 5 seconds */
         this.spinner.hide();
     }, 3000);
  }


createUser(){
  console.log('createUser');
 this.router.navigate(['/superadmin/createuser']);
}
updateUser(id:string){
  console.log('updateUser');
  sessionStorage.setItem('updateId',id);
  this.router.navigate(['/superadmin/updateUser']);
}
deleteUser(userD:Registration){
  console.log('deleteUser');
  this.userD = userD;
 // console.log(userD);

}
confirmDelete(){
  console.log('confirm delete');
  //this.display='none'; 
 // $.modal.close();
  this.userService.deleteUser(this.userD).subscribe((res:any)=>{
    //this.users = data;
   // console.log(this.users);
    console.log(res);
    //console.log('projects', this.projects);
  });

}
showUser(user:Registration){
  console.log('Show User');
  this.sUser = user;
}
}
