import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   //obejct decleration 
   //property that can be used in the heml file 
  user$ : Object;
  //here we are passing an instance of DataService class and ActicatedRouter class inside this constructor thourgh dependency injection 
  //this is like ==> const data = new DataDervice; 
  constructor(private data : DataService, private route : ActivatedRoute) {
    this.route.params.subscribe(
      params => {this.user$ = params.id;
        console.log(params.id);
      }
    )

   }
  //ths function i striggered asa this component is loaded
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data

    )
    
  }

}
