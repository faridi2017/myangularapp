import { Component, OnInit } from '@angular/core';
import { MyLead } from '../modal/MyLead';
import { VictorServiceService } from '../apiService/victor-service.service';
import {throwError} from 'rxjs';
import { MyItems } from '../modal/MyItems';
import {HttpResponse } from '@angular/common/http';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-already-booked',
  templateUrl: './already-booked.component.html',
  styleUrls: ['./already-booked.component.css']
})
export class AlreadyBookedComponent implements OnInit {
 blist;
 loading = false;
 public myLead: MyLead[];
 public selectedLead: MyLead[];
   dropdownSettings = {};
   dropdownList = [];
   selectedUserList = [];
   userList = [];
 
   dropdownSettingsA = {};
   dropdownListA = [];
   selectedUserListA = [];
   leadDetails:MyLead;
   indexL;
   indexLI;
   leadItems: MyItems[];
 
   filter = false;
   isRowSelect= false;
   isUserSelect = false;
   isAssignSelect = false;
   isButton = false;
   msg = false;
   msg2 = false;
   public numberOfSelectedLead = 0;
   key;
   arr = [];
 
   constructor(private leadService: VictorServiceService, private router: Router) {
     //this.myLead = new MyLead[10];
     
     this.selectedLead = [];
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }
 
    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });
    } // end of constructor
 
   ngOnInit() {
 //reload page each time
 
 
 
 //reload page on each click
 
 
 
     this.dropdownSettings = {
       singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
       unSelectAllText: 'UnSelect All',
       itemsShowLimit: 3,
       allowSearchFilter: true
     };
     this.dropdownSettingsA = {
       singleSelection: false,
       idField: 'item_id',
       textField: 'item_text',
       unSelectAllText: 'UnSelect All',
       itemsShowLimit: 3,
       allowSearchFilter: true
     };
 
    /* this.rawLeadService.getLeadsByStausId(statusId)
 
 
    */
 // calling get api for raw leads
     this.loading=true;
     this.leadService.getUserLeads('10',sessionStorage.getItem('userName')).subscribe((data: MyLead[]) => {
                            
                             this.indexL = data.length;
                             this.myLead = data;
                             this.loading=false;
                          console.log('leads',data);
                                   for(let i=0; i<this.indexL; i++ ) {
                                     for(let j=0; j<this.myLead[i].items.length; j++){
                                       this.userList.push(this.myLead[i].items[j].userName);
                                      
                                          } // end of inner for loop
                                   } // end of outer for loop
                                   
                                     return true;
                                 },
                                 error => {
                                   this.loading=false;
                                   console.error("Error in Api!");
                                   return throwError(error);  // Angular 6/RxJS 6
                                 }
                               ); 
                               
   }  // end of ngOnInit
             onItemSelect(item: any, i) {
                               //console.log('Aarif');
                             // console.log(this.myLead[i].selectedUserList);
                               } // end of onItemSelect
 
     onItemSelectA(item: any) {
     //  console.log(item);
       this.selectedUserListA;
       if(this.selectedUserListA.length!=0){
           this.isUserSelect = true;
       }
      console.log('Aarif:', this.selectedUserListA);
        //  console.log(this.myLead[i].selectedUserList);
    } // end of onItemSelectA
                                
                                // event on check box
                                 onRowSelect(event: any, i) {
                                 if(event== true){
                                 this.numberOfSelectedLead = this.numberOfSelectedLead +1;
                                 this.arr.push(i);
                                
                               }else{
                                 
                                   let index = this.arr.indexOf(i); // returns 0
                                   this.arr.splice(index, 1);
                                   
                                
                                  
                                 this.numberOfSelectedLead = this.numberOfSelectedLead -1;
                              
                               }
                             }
                                 getDetails(myList:MyLead){
                                  this.leadDetails=myList;
                                 }//end of getDetails
     
                                

}
