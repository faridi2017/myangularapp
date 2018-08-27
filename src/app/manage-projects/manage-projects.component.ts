import { Component, OnInit, Output,EventEmitter,Input} from '@angular/core';
import { Project } from '../modal/project';
import { Document } from '../modal/document';
import { NgxSpinnerService } from 'ngx-spinner';
import { VictorServiceService } from '../apiService/victor-service.service';

import * as XLSX from 'xlsx';
const { read, write, utils } = XLSX;
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://192.168.43.227:5000/api/victor/fileupload';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from "rxjs";
import {throwError} from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { stringify } from '@angular/core/src/util';
declare var ol: any;
const httpOptions1 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};
@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css']
})
export class ManageProjectsComponent implements OnInit {
  map: any;
  loading=false;
  message:string;
  showPosition;
address: any;
geoAddress: any;
  form1 = false;
  postAddDocUrl ='http://192.168.1.10:5000/api/victor/addDocument';
bExcel = false;
  form2 = false;
  projects: Project[];
  files: FileList;
  filestring: string;
  fi = false;
  fim;
  project: Project;
  document: Document;
 
constructor(private prjService: VictorServiceService, private http: HttpClient, private data: VictorServiceService,
  private router: Router,private spinner:NgxSpinnerService ) {
this.project = new Project();
this.document = new Document();
//this.document.dFile ='sd';
//this.document.name = 'zfg';
  this.loading=true;
  this.prjService.getAllProjects(sessionStorage.getItem('userName')).subscribe((data: Project[])=>{
  this.projects = data;
  this.loading=false;
  this.bExcel =true;
  
});
 }

  ngOnInit() {
   
  }
  getDocuments(projectID){

    //projectID = stringify(pro);
    //console.log('pid', projectID);
    projectID = String(projectID);
    sessionStorage.setItem('prjID',projectID);
    //this.data.changeMessage(projectID);

    //this.clicked.emit(projectID);
    this.router.navigate(['superadmin/document']);

  }
  
 
         
  createProject(){
    this.router.navigate(['superadmin/location']);
   
  }
  
 
  createExcel(){
    this.prjService.exportAsExcelFile(this.projects, 'projects');
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        //this.showPosition(position);// BSI, sector 63, H140
                                // 28.6258140//28° 37' 32.93'' N
                               //77.3790430//77° 22' 44.55'' E
                               //28.567945599999998
                               //77.41200099999999
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
       // console.log(Math.PI);
        // this.currentLat = position.coords.latitude;
   // this.currentLong = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
 // newMessage(){
    //this.data.changeMessage("Hello from manage project");
 // }
 
}
