import { Component, OnInit } from '@angular/core';

import { MyLead } from '../modal/MyLead';
import { VictorServiceService } from '../apiService/victor-service.service';
import {throwError} from 'rxjs';
import { MyItems } from '../modal/MyItems';
import {HttpResponse } from '@angular/common/http';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-visiton',
  templateUrl: './visiton.component.html',
  styleUrls: ['./visiton.component.css']
})
export class VisitonComponent implements OnInit {

  public myLead: MyLead[];
  public selectedLead: MyLead[];
    dropdownSettings = {};
    dropdownList = [];
    selectedUserList = [];
    userList = [];
    loading=false;
  
    dropdownSettingsA = {};
    dropdownListA = [];
    blist;
    selectedUserListA = [];
   
    indexL;
    indexLI;
    leadItems: MyItems[];
    leadDetails:MyLead;
  
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
  
    constructor(private rawLeadService: VictorServiceService, private router: Router,
      private spinner: NgxSpinnerService) {
      
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
      this.rawLeadService.getUserLeads('5',sessionStorage.getItem('userName')).subscribe((data: MyLead[]) => {
             
                              this.indexL = data.length;
                             
                              this.myLead = data;
                              this.loading=false;
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
                          //      console.log('Aarif');
                            //   console.log(this.myLead[i].selectedUserList);
                                } // end of onItemSelect
  
      onItemSelectA(item: any) {
        //console.log(item);
        this.selectedUserListA;
        if(this.selectedUserListA.length!=0){
            this.isUserSelect = true;
        }
       
                                  } // end of onItemSelectA
                                 
                                 // event on check box
                                  onRowSelect(event: any, i) {
                                  if(event== true){
                                  this.numberOfSelectedLead = this.numberOfSelectedLead +1;
                                  this.arr.push(i);
                                 // console.log(this.numberOfSelectedLead);
                                 // this.selectedLead.push(this.myLead[i]);
         //                        console.log(this.arr);
                                }else{
                                  
                                    let index = this.arr.indexOf(i); // returns 0
                                    this.arr.splice(index, 1);
                                    //The first parameter is the index at which we want to remove,
                                    // and the second is the number of elements to remove, starting from that index.
                                  
                                 
                                   
                                  this.numberOfSelectedLead = this.numberOfSelectedLead -1;
           //                       console.log(this.arr);
                                  //console.log(this.numberOfSelectedLead);
                                 // var removed = arr.splice(2, 0, "water"); 
                                }
                                  //console.log(this.numberOfSelectedLead)
                                 // this.isRowSelect = !this.isRowSelect;
                                  
                                 // console.log(this.selectedLead);
                                  }
      
                                  //btnSendSelectedLead(){
                                  
                                    //if(this.numberOfSelectedLead == 0 || this.isUserSelect== false){
                                          // this.msg = true;
                                          //alert('Please select at least one lead and an assignee!');
                                                                 //   return;
                                            // }else{
                                       //for(let j = 0; j<this.arr.length; j++){
                                          //  this.myLead[this.arr[j]].assignedToUsers = this.selectedUserListA;
                                           // this.selectedLead.push(this.myLead[this.arr[j]]);
                                          //  this.selectedLead.push(this.myLead[this.arr[j]]);
                                            // }
                                                                 //this.selectedLead.push(this.myLead[this.arr[j]]);
                                                              // this.msg2 = true;
                                                                   // post api with this.selectedLead
                                    //this.rawLeadService.postLead(this.selectedLead).subscribe((res: HttpResponse<Text>)=> {
                                      //console.log(res);
                                     //});            
                                                                  
                                                                      
                                                              //alert('submitted');
                                                            // }
                                                              //  console.log('clicked');
                                                            //   }
                                                               getDetails(myList:MyLead){
                                                                this.leadDetails=myList;
                                                               }
}
