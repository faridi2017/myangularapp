import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MyLead } from '../modal/MyLead';
import { VictorServiceService } from '../apiService/victor-service.service';
import {throwError} from 'rxjs';
import { MyItems } from '../modal/MyItems';
import {HttpResponse } from '@angular/common/http';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';
import { Project } from '../modal/project';
import { findIndex } from 'rxjs/operators';
import { Registration } from '../modal/Registration';
import { IdName } from '../modal/id-name';
import { Nameid } from '../modal/nameid';


@Component({
  selector: 'app-rawleads',
  templateUrl: './rawleads.component.html',
  styleUrls: ['./rawleads.component.css']
})
export class RawleadsComponent implements OnInit {
blist;
loading = false;
remarks;
x:string[] = [];
expand=[true,true,true,true,true,true,true,true,true,true];
collapse=[false,false,false,false,false,false,false,false,false,false];
chekedLead=false;
selectedUsers;
userNameId: Nameid[];
spliceIndexS;
spliceIndexE;
token;
public projectNameList: string[];
 public uniqueNameList: any;
 selectedProjectId;
bExcel = false;
  public myLead: MyLead[];
   pageNumber;
   users: Registration[];
   isUsers= false;
  alertMsg= 'Please enter valid page number! 0 To  ';
rawLeadsCount = +sessionStorage.getItem('rawLeadsCount');
//abcd = 3.6;
//abcde = Math.floor(this.abcd);
numberOfPage = Math.ceil(this.rawLeadsCount/10);
  public myLead1: MyLead[];
  public selectedLead: MyLead[];
  public projects: Project[];
    dropdownSettings = {};
    dropdownList = [];
    selectedUserList = [];
    userList = [];
  projectList = ['99acre','housing.com','ASC','DLF'];
    dropdownSettingsA = {};
    dropdownListA = [];
    dropdownListAU = [];
    multiSelectDropdownSelectedIds = [];
    multiSelectDropdownSelectedTokens = [];
    selectedUserListA = [];
    selectedProjectName;
    indexL;
    indexLI;
    indexRawLeads;
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
    indicesOfSelectedLeads = [];
  
    constructor(private rawLeadService: VictorServiceService, private router: Router,
      private httpService: HttpClient, ) {
      //this.myLead = new MyLead[10];
      this.projectNameList = ['Select A project'];
      this.uniqueNameList =[];
      this.userNameId= [];
this.users = [];
 //this.myLead1 = [];
      this.rawLeadService.getRawLeads(sessionStorage.getItem('userName')).subscribe((data: MyLead[]) => {
        this.indexRawLeads = data.length;
        this.myLead1 = data;
        console.log(this.myLead1[0]);
        this.bExcel = true;
       // console.log('myleads1',this.myLead1);
        return true;
         },
         error => {
                   console.error("Error in Api!");
                   return throwError(error);  // Angular 6/RxJS 6
                  }
         ); 
      
      this.selectedLead = [];
      this.myLead1 = [];
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
  
      this.pageNumber = 1;
      this.loading=true;
      this.rawLeadService.getTenRawLeads(this.pageNumber).subscribe((data: MyLead[]) => {
               this.indexL = data.length;
                this.myLead = data;
                this.loading=false;
               
             for(let i =0;i<this.myLead.length;i++){
              this.x[i] = this.myLead[i].cmpctLabel.substring(0,20);
             }
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
                            
                                } // end of onItemSelect
  
      
                                 
                                 // event on check box
                             onRowSelect(event: any, i) {
                                  if(event== true){
                                  this.numberOfSelectedLead = this.numberOfSelectedLead +1;
                                  this.indicesOfSelectedLeads.push(i);
                                
                                }else{
                                  
                                    let index = this.indicesOfSelectedLeads.indexOf(i); // returns 0
                                    this.indicesOfSelectedLeads.splice(index, 1);
                                    //The first parameter is the index at which we want to remove,
                                    // and the second is the number of elements to remove, starting from that index.
                                
                                  this.numberOfSelectedLead = this.numberOfSelectedLead -1;
                              
                                }
                                if(this.numberOfSelectedLead==0){
                                  this.chekedLead = false;
                                }else{ this.chekedLead=true;}
                            
                                  }
                                
      
          
  getDatabyPageNumber(){
              console.log('page number');
              if(this.pageNumber>0 && this.pageNumber <=this.numberOfPage){
                this.rawLeadService.getTenRawLeads(this.pageNumber).subscribe((data: MyLead[]) => {
                  this.indexL = data.length;
                  this.myLead = data;
                //  console.log(this.myLead);
                  
                  // this.myLead1 = this.myLead.slice(0,5);
                  return true;
                  },
                  error => {
                            console.error("Error in Api!");
                            return throwError(error);  // Angular 6/RxJS 6
                            }
                  ); 
              }else{
                this.alertMsg = this.alertMsg + String(this.numberOfPage);
              alert(this.alertMsg);
              this.alertMsg = 'Please enter valid page number! 0 To  ';
              }
              
            }// end of getDatabyPagenumber
            createExcel():void {
              this.rawLeadService.exportAsExcelFile(this.myLead1, 'rawLead');
           }//end of create excel
        
          uploadFiles () {
           this.router.navigate(['/admin/uploadFiles']);
          
          }// end of uploadFiles

          openModelWindow(){
            for(let j = 0; j<this.indicesOfSelectedLeads.length; j++){
              this.myLead[this.indicesOfSelectedLeads[j]].assignedToUsers = this.selectedUserListA[0];
              this.selectedLead.push(this.myLead[this.indicesOfSelectedLeads[j]]);
            //  this.selectedLead.push(this.myLead[this.indicesOfSelectedLeads[j]]);
               }
              this.rawLeadService.getAllProjectsA(sessionStorage.getItem('userName')).subscribe((res:Project[])=>{
                 // console.log(res);
                  this.projects = res;
                  console.log('project list',this.projects);
                  for(let i=0;i<this.projects.length;i++){
                    this.projectNameList.push(this.projects[i].projectName);
                  }
              
                this.uniqueNameList = new Set(this.projectNameList);
                 console.log('unique',this.uniqueNameList);
                  
              });

          }// end of openModelWindow()
          selectProject(){
        
          //  console.log('selected project :', this.selectedProjectName);
                  for(let i =0;i<this.projects.length;i++){
                      if(this.selectedProjectName === this.projects[i].projectName){
                        this.selectedProjectId = this.projects[i].projectId;
                        console.log('index:',this.selectedProjectId);
                        //calling user api by projectid
                        this.rawLeadService.getAssigneeListA(this.selectedProjectId).subscribe((res:Registration[])=>{
                            this.users = res;
                            console.log('selected project users:',this.users);
                        if(this.users!=null){
                        let len = this.users.length;
                             // this.userNameId.length = len; 
                        //     this.userNameId = new Array(len);
                              for(let i =0;i<this.users.length;i++){
                                let name = this.users[i].firstName+' '+this.users[i].lastName;
                                let id = this.users[i].id;
                                let token = this.users[i].token;

                    //            this.userNameId[i].name = name;
                      //          this.userNameId[i].id = this.users[i].id;
                                this.dropdownListAU.push(name);
                                this.multiSelectDropdownSelectedIds.push(id);
                                this.multiSelectDropdownSelectedTokens.push(token);

                              }
                            //  console.log('mylist',this.dropdownListAU);
                              this.isUsers = true;
                             return;
                   }else{
                    this.isUsers = false;
                   }
  
                        });
                       
                       // this.dropdownListAU
                       
                       break;
                      }
                  }
            }//end of selected project
       
            onItemSelectA(item: any) {
              // console.log(item);
             //  this.selectedUserListA = item;
               if(this.selectedUserListA.length!=0){
                   this.isUserSelect = true;
               }else{this.isUserSelect = false;}
                        
               } // end of onItemSelectA
            assignLeads(){
              console.log('assign leads');
              for(let i =0;i<this.selectedLead.length;i++)
                  {   // updating number os selected leads
                      for(let j =0;j<this.selectedUserListA.length;j++)
                        {  
                          let index1 = this.dropdownListAU.indexOf(this.selectedUserListA[j]);
                               //   if(this.selectedUserListA[j]==this.selectedLead[i].items[k].userName){
                         this.selectedLead[i].items[j].assignedTo =this.multiSelectDropdownSelectedIds[index1];
                         this.selectedLead[i].items[j].token =this.multiSelectDropdownSelectedTokens[index1];
                         console.log('s user name:',this.selectedUserListA[j]);
                         console.log('s user id:',this.multiSelectDropdownSelectedIds[index1]);
                         console.log('s user token:',this.multiSelectDropdownSelectedTokens[index1]);
                         this.selectedLead[i].items[j].token = this.multiSelectDropdownSelectedTokens[index1];
                         this.selectedLead[i].items[j].leadID = this.selectedLead[i].leadId;
                         this.selectedLead[i].items[j].statusId =1;
                         this.selectedLead[i].items[j].status = 1;
                         this.selectedLead[i].items[j].companyId = this.selectedProjectId;
                                  
                                  this.spliceIndexS = j+1;
                                  //console.log('selected user id',this.multiSelectDropdownSelectedIds[index1]);
                                  break;
                             //   }
                         //   }
                      
                        }
                        //apps.splice(removeIndex, 1);
                        this.spliceIndexE = this.selectedLead[i].items.length - this.spliceIndexS;
                        this.selectedLead[i].items.splice(this.spliceIndexS,this.spliceIndexE);
                  }
                  console.log('updated leads',this.selectedLead);
                //  console.log('selected user id',this.multiSelectDropdownSelectedUsers);
             for(let i=0;i<this.selectedLead.length;i++){
                   this.loading=true;
                   this.rawLeadService.postLeads(this.selectedLead[i],this.selectedLead[i].leadId).subscribe((res: HttpResponse<Text>)=> {
                //console.log(res);
               // this.selectedLead[1].assignedUsers
               this.loading=false;
               alert('leads assigned successfully');
               });  
              }
            
             //
             this.router.navigateByUrl('superadmin/rawLead');
            }//end of assignLeads


          cancelAssignment(){
            this.router.navigateByUrl('superadmin/rawLead');
          }// end of cancel
          getDetails(myList:MyLead){
           this.leadDetails=myList;
          }//end of getDetails

          knowmore(myList:MyLead){
            this.leadDetails=myList;
            console.log('View More');

          }
          show(remarks,i){
            this.expand[i]=!this.expand[i];
            this.collapse[i]=!this.collapse[i];
            this.remarks=remarks;
            console.log('Show more');
          }
            
}

