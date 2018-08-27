import { Component, OnInit } from '@angular/core';
//import { AgmCoreModule } from '@agm/core';
import { VictorServiceService } from '../apiService/victor-service.service';
import { Location } from '../modal/Location';
import { Salesperson } from '../modal/salesperson';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent implements OnInit {
salesPerson: Salesperson[];
  longitude: number = 77.3790430;
  lt1: number = 28.6258140;
  ln1: number = 77.3790430;
  bLoc=false;
  loading=false;
 // location1: Location;
  lat: number = 28.6258140;
  lon: number = 77.3790430;
  abc = [4,5,6,7];
  len;
  locations: Location[] = [];
  teamLocations: Location[];
  //xyz: Location[];
  l1: Location;
  lcn:Location[] = [{lattitude: 28.5829727, longitude: 77.3756878},
                    {lattitude: 28.5941812, longitude: 77.2570586},
                    {lattitude: 28.7015521, longitude: 77.4207793}

                    ];
  /*
  lat: "28.5829727", lng: "77.3756878",
  lat: "28.5941812", lng: "77.2570586"
  lat: "28.7015521", lng: "77.4207793"
  */
  public test:Location[] = [ {lattitude: 28.6258140, longitude: 77.3790430},
                                 {lattitude: 28.7358140, longitude: 77.4890430},
                                 {lattitude: 28.8458140, longitude: 77.5990430},
                                 {lattitude: 28.1258140, longitude: 78.0090430},
                                 {lattitude: 28.3358140, longitude: 77.8890430},
                                 {lattitude: 28.4758140, longitude: 77.1990430}];
  constructor(private locationSrv: VictorServiceService, private spinner:NgxSpinnerService) { 
    this.l1 = new Location();
  //  this.locations = [];
    this.salesPerson = [];
    this.teamLocations = [];
//var arr : Criminal[] = [];
//this.xyz = new Array<Location>(19);
   // this.locations = Array
   this.loading=true;
         locationSrv.getLocations(sessionStorage.getItem('userName')).subscribe((data:Salesperson[])=>{
            this.salesPerson = data;
            this.loading=false;
           // this.len= this.salesPerson.length;
           console.log('sales location', this.salesPerson);
           //console.log('lenth:', this.len);
    for(let i=0;i<this.salesPerson.length;i++){
      console.log('loccc');
      this.l1 = new Location();
      this.l1.lattitude = +this.salesPerson[i].lat;
      this.l1.longitude = +this.salesPerson[i].lng;
     this.teamLocations.push(this.l1);
     // console.log('new loc',this.xyz);
  }
  this.len = this.teamLocations.length;
       
   });
    
  }

  ngOnInit() {

    
   
  }
 
}
