import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //property to hold the data imported from the API
  users$ : object;
  constructor(private data : DataService) { }
      
  //this function is called asa the component loads 
  ngOnInit() {
    //this function call the getUsers function from DtaService and get the Data 
    this.data.getUsers().subscribe(
      //here subscribe  function is used to push the new  user info into the data stream  and then it is stored into the this.users$ 
      data => {this.users$ = data;
      console.log(data);}
    );
    
  }

}
