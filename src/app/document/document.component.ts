import { Component, OnInit } from '@angular/core';
import { Document } from '../modal/document';
import { VictorServiceService } from '../apiService/victor-service.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
documents: Document[];
newDoc: Document;
form1 = false;
//message:string;
numberOfRecord;
//https://www.npmjs.com/package/excel-as-json
  constructor(private docService: VictorServiceService,
     private prjService: VictorServiceService){
this.newDoc = new Document();
this.documents = [];
//this.data.currentMessage.subscribe(message => this.message = message);
//sessionStorage.setItem('prjID',this.message);
//console.log('prjID',sessionStorage.getItem('prjID'));

   }

  ngOnInit() {
   
    this.docService.getDocumentsOfProject(sessionStorage.getItem('prjID')).subscribe((data: Document[])=>{
      this.documents = data;
      this.numberOfRecord = this.documents.length;
     //console.log('documents', this.documents);
    });
  }
 
  showForm(){
   this.form1 = true;
  }
  cancelForm(){
    this.form1= !this.form1;
  }
  fileChange($event){

  }
}
